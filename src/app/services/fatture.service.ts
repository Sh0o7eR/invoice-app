import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Client} from "../model";
import {catchError, retry} from "rxjs/operators";

interface ClientFatture {
  id: string;
  createdAt: string;
  clientName: string;
  total: number;
  status: string;
}

@Injectable({providedIn: "root"})
export class FattureService {
  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getFatture(): Observable<Client[]>{
    return this.http.get<Client[]>(this.baseURL + '/listaFatture')
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  getFatturaId(id: string | null): Observable<Client[]>{
    return this.http.get<Client[]>(this.baseURL + '/listaFatture/' + id)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  createFattura(client: Client): Observable<any> {
    return this.http
      .post<Client>(this.baseURL + '/listaFatture', JSON.stringify(client), this.httpHeader)
  }

  updateFattura(id: string, data: any): Observable<Client[]> {
    return this.http.put<Client[]>(this.baseURL + '/users/' + id, JSON.stringify(data), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  deleteFattura(id: string){
    return this.http.delete<Client>(this.baseURL + '/users/' + id, this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  httpError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
