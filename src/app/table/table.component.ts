import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() colName: string[];
  @Input() colValue: any[];
  constructor() {}

  ngOnInit() {
  }

}