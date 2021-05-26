import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../model";
import {Observable} from "rxjs";

@Component({
  selector: 'inv-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  status = new FormControl();
  statusList: string[] = ['Draft', 'Pending', 'Paid'];

  listDataJson: Client[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.http.get<Client[]>('assets/data.json')
      .subscribe(data => {
        this.listDataJson = data;
      });
     // this.http.post<Client[]>('assets/data.json',
     //   {
     //     id: "nuovo",
     //     createdAt: "2021-08-18",
     //     clientName: "Manuel",
     //     total: 10000,
     //     status: "paid",
     //   })
     //   .subscribe(val => {
     //       console.log("POST call successful value returned in body",
     //         val);
     //     },
     //       response => {
     //         console.log("POST call in error", response);
     //       },
     //       () => {
     //         console.log("The POST observable is now completed.");
     //       });
this.createArticle()
       }

  createArticle(): Observable<Client[]> {
    return this.http.post<Client[]>('assets/data.json',
      {
        id: "nuovo",
        createdAt: "2021-08-18",
        clientName: "Manuel",
        total: 10000,
        status: "paid",
      }
    );
  }



}
