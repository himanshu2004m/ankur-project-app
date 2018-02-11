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
  zoom=6;
  lat = 22.719568;
  lng = 75.857727;
  
  markers: marker[] = [
    {
		  lat: 22.719568,
		  lng: 75.857727,
		  label: 'Indore',
		  draggable: true
	  }
  ];
  mark: any= { };
  constructor() { }

  ngOnInit() {
  }

  saveLocation(lat: number, lng: number,label:string){
    this.markers.push({
      lat,
      lng,
      label,
      draggable: true});
  }

    mapClicked($event: MouseEvent){
      this.lat=$event.coords.lat,
      this.lng=$event.coords.lng,
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
