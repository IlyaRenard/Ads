import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { HeaderConfig } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchField!:string;
  private routeSubscription?: Subscription;

  constructor(public authService: AuthService,private route: ActivatedRoute,private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.searchField = params['selectedIndex']);
   }

  ngOnInit(): void {
    
  }

  search(){
    return this.router.navigate(['/search/'+this.searchField]);
  }

  headerConfig: HeaderConfig[] = [
    {
      title: "Home",
      routerPath: "",
      isVisible: this.authService.userData
    },
    {
      title: "Add ad",
      routerPath: "addAd",
      isVisible: this.authService.userData
    },
    {
      title: "Profile",
      routerPath: "profile",
      isVisible: this.authService.userData
    },
    {
      title: "Log in",
      routerPath: "login",
      isVisible: !this.authService.userData
    },
    {
      title: "Register",
      routerPath: "register",
      isVisible: !this.authService.userData
    },
  ]

}
