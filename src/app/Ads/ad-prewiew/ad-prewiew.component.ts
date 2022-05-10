import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/Models/ad.model';

@Component({
  selector: 'app-ad-prewiew',
  templateUrl: './ad-prewiew.component.html',
  styleUrls: ['./ad-prewiew.component.scss']
})
export class AdPrewiewComponent implements OnInit {

  @Input() ad: Ad = {
    title: "title",
    price: 1,
    description: "description",
    photoUrl: "photo",
    date: "date"
  }

  ngOnInit(): void {

  }

  addToFavorite() {
    console.log('Add');


  }
}
