import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {User} from '../user';
import {Event} from '../../../entity/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User[] = [];
  newEvents: Event[] = [];

  constructor(private api: WebService) {
  }

  ngOnInit() {
    this.api.getEventService().subscribe(
      res => {
        for (let i = 0; i < res['res'].length; i++) {
          this.newEvents.push
          (new Event(res['res'][i]['event_date'],
            res['res'][i]['event_description'],
            res['res'][i]['event_type']));
        }
        console.log('****** $this.newEvents');
      },
      err => {
        console.log(err);
      }
    );
    this.api.getUser().subscribe(
      (res: User[]) => {
        this.user = res['res'];
      },
      err => {
        console.log(err);
      }
    );
  }

  getCard(data) {
    console.log(data);
  }
}
