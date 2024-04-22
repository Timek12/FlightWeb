import { Component, OnInit } from '@angular/core';
import { FlightDetailService } from '../shared/flight-detail.service';
import { FlightDetail } from '../shared/flight-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styles: ``
})
export class FlightDetailsComponent implements OnInit {
  constructor(public service: FlightDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: FlightDetail) {
    let copy = Object.assign({}, selectedRecord);
    this.service.formData.arrivalLocation = copy.arrivalLocation;
    this.service.formData.departureLocation = copy.departureLocation;
    this.service.formData.departureDate = copy.departureDate;
    this.service.formData.flightNumber = copy.flightNumber;
    this.service.formData.id = copy.id;
  }

  onDelete(id: number) {
    if(confirm('Are you sure to delete this record?')) {
      this.service.deleteFlightDetail(id)
      .subscribe({
        next: res => {
          this.service.refreshList();
          this.toastr.error('Deleted successfully', 'Flight Detail Register');
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
