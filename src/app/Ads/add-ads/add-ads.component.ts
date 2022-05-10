import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { Ad } from 'src/app/Models/ad.model';
import { PhotoUpload } from 'src/app/Models/photoUpload';
import { AdsPhotosService } from 'src/app/Services/ads-photos.service';
import { AuthService } from 'src/app/Services/auth.service';
import { addAd } from 'src/app/Store/Actions/ad.action';
import { adSelector, adsSelector } from 'src/app/Store/Selector/ads.selector';


@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  selectedCategory!: string;
  selectedTypeRealty!: string;
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
    private uploadService:AdsPhotosService
  ) {
    const currentDate = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    this.ad.date = currentDate || undefined;
    this.ad.uid = authService.userData.uid;
    this.ad.id=UUID.UUID();
  }

  ngOnInit(): void {
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


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new PhotoUpload(file);
       
        console.log(this.currentFileUpload);
              
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}

