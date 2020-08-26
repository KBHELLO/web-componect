import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule
  ]
})
export class CardModule { }
