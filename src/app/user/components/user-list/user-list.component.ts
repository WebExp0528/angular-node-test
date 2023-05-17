import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.get().subscribe({
      next: (data: any) => {
        this.users = data?.data ?? [];
      },
      error: (error: any) => {
        this.users = [];
      },
    });
  }
}
