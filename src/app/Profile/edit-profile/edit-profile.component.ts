import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/Services/auth.service';
import { UserState } from 'src/app/Store/Reducers/user.reducer';
import { userSelector } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  uid: any = window.localStorage.getItem('user')
  user$ = this.userStore.pipe(select(userSelector(JSON.parse(this.uid).uid)))

  constructor(
    public authService: AuthService,
    private userStore: Store<UserState>,
    public router: Router) { }

  ngOnInit(): void {
  }

  editProfile(id?: string, displayname?: string, phoneNumber?: number) {
    const data = {
      displayName: displayname,
      phoneNumber: phoneNumber
    }
    if (id) {
      this.authService.UpdateUser(id, data)
        .then(() => this.router.navigate(['/profile']))
        .catch(err => console.log(err));
    }
  }

}
