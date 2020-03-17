import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/firestore';

describe('UserService', () => {
  let service: UserService;

  const AngularFirestoreStub = {

};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AngularFirestore, useValue: AngularFirestoreStub}]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
