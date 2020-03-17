import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

import {MatSnackBar} from '@angular/material/snack-bar';

import { User } from '../user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
    ) { }

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern('0[1-9][0-9]{8}')]],
    email: ['', [Validators.required, Validators.email]],
  });

  saveUser() {

    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value as User).then(res => {
        this.userForm.reset();
        this.snackBar.open('User Created', 'Undo', {
          duration: 2000
        });
      });
    } else {
      this.snackBar.open('Invalid User', 'Undo', {
        duration: 2000
      });
    }
  }


  ngOnInit(): void {
  }

}
