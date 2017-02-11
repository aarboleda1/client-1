import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-lab-search',
  templateUrl: './lab-search.component.html',
  styleUrls: ['./lab-search.component.css']
})
export class LabSearchComponent implements OnInit {
  zipCode: string;
  constructor() { }

  ngOnInit() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  


}
