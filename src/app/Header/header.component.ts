import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty, Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { HeaderConfig } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchField!: string;
  private routeSubscription?: Subscription;
  uid: any = window.localStorage.getItem('user')

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,) {
    this.routeSubscription = route.params.subscribe(params => this.searchField = params['selectedIndex']);
  }

  ngOnInit(): void {

  }

  searchByTitle() {
    if (!this.searchField) {
      return this.router.navigate(['/'])
    }
    else {
      return this.router.navigate(['/search/' + this.searchField]);
    }
  }
  searchByCategory(category:string){
    return this.router.navigate(['/category/' + category])
  }

  headerConfig: HeaderConfig[] = [
    {
      title: "Home",
      routerPath: "",
      isVisible: this.uid
    },
    {
      title: "Add ad",
      routerPath: "addAd",
      isVisible: this.uid != 'null'
    },
    {
      title: "Profile",
      routerPath: "profile",
      isVisible: this.uid != 'null'
    },
    {
      title: "Log in",
      routerPath: "login",
      isVisible: this.uid === 'null'
    },
    {
      title: "Register",
      routerPath: "register",
      isVisible: this.uid === 'null'
    },
  ]

}
