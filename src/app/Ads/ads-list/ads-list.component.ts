import { Component, OnInit } from '@angular/core';
import { AdsService } from 'src/app/Services/ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {

  constructor(private adsService:AdsService) { }

  ad:any=this.adsService.getData();

  ngOnInit(): void {
  }

}
