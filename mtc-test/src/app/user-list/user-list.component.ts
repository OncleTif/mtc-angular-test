import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService
    ) { }

  users: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
    res => {
      this.users = res;
    });
  }
}
