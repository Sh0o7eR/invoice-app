import { Component, OnInit } from '@angular/core';
import {FattureService} from "../../services/fatture.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'inv-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {

  invoiceDetail: any | undefined;

  constructor(private route: ActivatedRoute, private fattureService: FattureService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.fattureService.getFatturaId(id)
      .subscribe(res => {
        console.log(res)
        this.invoiceDetail = res;
      })
  }



}
