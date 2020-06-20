import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list.component';
import { MemberCardComponent } from '../member-card/member-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MemberListComponent,
    MemberCardComponent
  ]
})
export class MemberListModule { }
