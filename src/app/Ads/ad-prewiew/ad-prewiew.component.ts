import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/Services/ads.service';

@Component({
  selector: 'app-ad-prewiew',
  templateUrl: './ad-prewiew.component.html',
  styleUrls: ['./ad-prewiew.component.scss']
})
export class AdPrewiewComponent implements OnInit {

  

  constructor(private adsService: AdsService) { }

  ad: any = this.adsService.getData();

  ngOnInit(): void {
  }

  addToFavorite() {
    if (!this.ad.isFavorite) {
      this.ad.isFavorite = true;
      console.log("add to favorite");
    }
    else {
      this.ad.isFavorite = false
      console.log("remove favorite");
    }

  }
}
