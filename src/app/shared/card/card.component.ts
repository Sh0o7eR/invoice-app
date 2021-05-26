import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inv-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() barCode = '';
 @Input() date = '';
 @Input() name = '';
 @Input() import = 0;
 @Input() status = '';

  constructor() { }

  ngOnInit(): void {
  }

}
