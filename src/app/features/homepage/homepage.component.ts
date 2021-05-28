import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../model";
import {FattureService} from "../../services/fatture.service";

@Component({
  selector: 'inv-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Output() statusButton = new EventEmitter<boolean>();

  status = new FormControl();
  statusList: string[] = ['Draft', 'Pending', 'Paid'];
  btnBool = false;

  listDataJson: Client[] = [];
  constructor(private http: HttpClient, private fattureService: FattureService) { }

  ngOnInit(): void {
    this.refreshPeople();
    // this.createFattura();
  }

  refreshPeople() {
    this.fattureService.getFatture()
      .subscribe(data => {
        this.listDataJson = data;
      })
  }

  createFattura(client: Client){
    this.fattureService.createFattura(client)
      .subscribe(data => {
        return this.listDataJson.push(data);
      })
        this.refreshPeople();
  }

  changeStatus(val: boolean){
    this.btnBool = !this.btnBool;
    this.statusButton.emit(val);
  }
}
