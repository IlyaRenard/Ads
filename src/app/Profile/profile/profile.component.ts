import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  public profile = {
    displayName: 'Ilya',
    email: 'ilya.gavrilik@gmail.com',
    phoneNumber: '298852785'
  };

  constructor(public authService: AuthService) {
    this.GetUserData()
  }

  ngOnInit(): void {

  }

  GetUserData() {
    return this.authService.GetUserDataSuccses().subscribe((response) => {
      this.currentUser = response;
    })
  }

}
