import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-tag-location',
  templateUrl: './geo-tag-location.component.html',
  styleUrls: ['./geo-tag-location.component.css']
})
export class GeoTagLocationComponent implements OnInit {
  title = 'My first AGM project';
  lat = 23;
  long = 75.809007;
  constructor() { }

  ngOnInit() {
  }

  saveLocation(lat: number, long: number){
    console.log(lat);
    this.lat = lat;
    this.long = long;

  }
}
