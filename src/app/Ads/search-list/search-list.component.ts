import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AdsState } from 'src/app/Store/Reducers/ads.reducers';
import { findAdByCategory, findAdByTitle } from 'src/app/Store/Selector/ads.selector';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  url:any;
  searchField:any;
  searchAd$:any;
  typeOfSearch:any;
  categoryFilter$:any;

  constructor(private store: Store<AdsState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngDoCheck() {    
    this.url = window.location.href;
    this.searchField = (this.url.split('/')[4]);
    this.typeOfSearch= (this.url.split('/')[3]);
    if(this.typeOfSearch === 'search'){
      this.searchAd$ = this.store.pipe(select(findAdByTitle(this.searchField)));
    }
    else if(this.typeOfSearch === 'category'){
      this.categoryFilter$=this.store.pipe(select(findAdByCategory(this.searchField)));
    }
   }

}
