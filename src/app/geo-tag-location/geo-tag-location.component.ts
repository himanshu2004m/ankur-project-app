import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-geo-tag-location',
  templateUrl: './geo-tag-location.component.html',
  styleUrls: ['./geo-tag-location.component.css']
})
export class GeoTagLocationComponent implements OnInit {
  title = 'My first AGM project';
  draggable= true;
  lat = 23.12;
  lng = 75.54;
  markers: marker[] = [
    {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }
  ];
  mark: any= { };
  constructor() { }

  ngOnInit() {
  }

  saveLocation(lat: number, lng: number){
    console.log(lat);
    this.lat = lat;
    this.lng = lng;
  }

    mapClicked($event: MouseEvent){
   
    this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true});
      console.log(this.markers);
    }
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
