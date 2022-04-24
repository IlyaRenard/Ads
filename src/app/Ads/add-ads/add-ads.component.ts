import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  selectedCategory!: string;
  selectedTypeRealty!: string;

  constructor() { }

  ngOnInit(): void {
  }

  typeRealty: any = {
    flat: "Flat",
    house: "House",
    ground: "Ground",
    garage: "Garage",
    commercialRealty: "Commercial realty"
  }

  saveAd() { 
    console.log('add ads');
    
  }

}
