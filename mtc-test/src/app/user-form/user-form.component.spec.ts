import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  const UserServiceStub = {

  };

  const MatSnackBarStub = {

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      providers: [
        UserFormComponent,
        [
          { provide: FormBuilder, useClass: FormBuilder },
          { provide: UserService, useValue: UserServiceStub},
          { provide: MatSnackBar, useValue: MatSnackBarStub}
        ]
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be False', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

});
