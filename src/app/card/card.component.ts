import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() bgClass: string;
  @Input() heading: string;
  @Input() subtitle: string;
  @Input() button: boolean;
  @Input() buttonType: string;
  @Input() buttonText: string;
  @Input() count: number;

  constructor() {
  }

  ngOnInit() {
  }

}
