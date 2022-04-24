import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile= {
    name:'Ilya',
    email:'ilya.gavrilik@gmail.com',
    phoneNumber:'+375298852785'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
