import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Ad } from 'src/app/Models/ad.model';
import { PhotoUpload } from 'src/app/Models/photoUpload';
import { AuthService } from 'src/app/Services/auth.service';
import { addAd } from 'src/app/Store/Actions/ad.action';
import { adsSelector } from 'src/app/Store/Selector/ads.selector';


@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  selectedCategory!: string;
  selectedTypeRealty!: string;
  selectedTypeComputer!: string;
  ad: Ad = new Ad();
  ads$ = this.store.pipe(select(adsSelector))

  selectedFiles?: FileList;
  currentFileUpload?: PhotoUpload;
  percentage = 0;

  constructor(
    private datepipe: DatePipe,
    private store: Store,
    public router: Router,
    private authService: AuthService,
  ) {
    const currentDate = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    this.ad.date = currentDate || undefined;
    this.ad.uid = authService.userData.uid;
    this.ad.photoUrl = 'https://material.angular.io/assets/img/examples/shiba1.jpg'
  }

  ngOnInit(): void {
  }

  typeComputer = {
    laptop: 'Laptop',
    computer: 'Computer',
    component: 'component'
  }

  typeRealty = {
    flat: "Flat",
    house: "House",
    ground: "Ground",
    garage: "Garage",
    commercialRealty: "Commercial realty"
  }

  saveAd() {
    this.store.dispatch(addAd(this.ad))
    return this.router.navigate(['/']);
  }

}

