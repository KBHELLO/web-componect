import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {CardModule} from '../card/card.module';
import {TableModule} from '../table/table.module';
import {HttpClientModule} from '@angular/common/http';
import {FormModule} from '../form/form.module';
import {CalendarModule} from '../calendar/calendar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    TableModule,
    HttpClientModule,
    FormModule,
    CalendarModule
  ]
})
export class DashboardModule { }
