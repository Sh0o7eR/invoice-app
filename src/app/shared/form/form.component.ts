import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'inv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedValue = '';
  foods = [
    {value: '10-days', viewValue: 'Net 10 Days'},
    {value: '15-days', viewValue: 'Net 15 Days'},
    {value: '20-days', viewValue: 'Net 20 Days'}
  ];
  newItemElementHTML: any = [];
  count = '';
  number = 0;

  profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', Validators.required, Validators.minLength(2)],
    text: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewItem():void {
    this.number++;
    this.count = 'item-' + this.number;
    this.newItemElementHTML.push(this.count);
    console.log('ADD', this.newItemElementHTML)
  }

  deleteItem(idx: number):void {
    this.newItemElementHTML.splice(idx, 1);
    console.log('remove', this.newItemElementHTML)
  }

  saveDraft():void{
    console.log('Saved', this.newItemElementHTML)
  }

}
