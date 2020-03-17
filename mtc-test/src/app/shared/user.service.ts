import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {
  }


  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
          .collection('users')
          .add(user)
          .then(res => resolve({}), err => reject(err));
  });
  }

  getUsers() {
    return this.firestore
          .collection('users')
          .get()
          .pipe(
            map(
              (querySnapshot) => {
                const users = [];
                querySnapshot.forEach(
                  doc => {
                    const data = doc.data();
                    users.push(
                      new User(
                        data.firstName,
                        data.lastName,
                        data.birthDate.toDate(),
                        data.phoneNumber,
                        data.email,
                      )
                    );
                  }
                );
                console.log(users);
                return users;
              }
            )
          );
  }
}
