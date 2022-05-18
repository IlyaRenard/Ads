import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  userRef: AngularFirestoreCollection<User>
  private dbPath = '/users';
  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
  ) {
    this.userRef = afs.collection(this.dbPath)

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.userData = JSON.parse(localStorage.getItem('user')!);

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        window.location.reload();
      })
      .catch((error) => {
        window.alert(error.message);
      });

  }

  SignUp(email: string, password: string, userName: string, phoneNumber: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.SetUserData(result.user, userName, phoneNumber);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: any, userName: string, phoneNumber: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: userName,
      phoneNumber: phoneNumber,
      photoURL: user.photoURL,
    };
    console.log(userData);
    return userRef.set(userData, {
      merge: true,
    });
  }

  GetAllUsers(): AngularFirestoreCollection<User> {
    return this.userRef;
  }

  GetAllUserSuccess() {
    return this.GetAllUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data() })
        )
      )
    )
  }

  UpdateUser(id: string, data: any): Promise<void> {
    return this.userRef.doc(id).update(data);
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      window.location.reload();
    });
  }
}
