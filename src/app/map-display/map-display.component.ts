import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.css']
})
export class MapDisplayComponent {
  private buildingsPerEpochMap = new Map<number, number>(); // i.e <epoch num, building count>

  constructor() { }



}
