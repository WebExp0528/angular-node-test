import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserListItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UserModule {}
