import { Component, OnInit } from '@angular/core';
import { FlightDetailService } from '../shared/flight-detail.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styles: ``
})
export class FlightDetailsComponent implements OnInit {
  constructor(public service: FlightDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
