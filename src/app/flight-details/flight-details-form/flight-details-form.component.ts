import { Component } from '@angular/core';
import { FlightDetailService } from '../../shared/flight-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-details-form',
  templateUrl: './flight-details-form.component.html',
  styles: ``
})

export class FlightDetailsFormComponent {
  constructor(public service: FlightDetailService, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    if(this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.postFlightDetail()
      .subscribe({
        next: res => {
          this.service.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Created successfully', 'Flight Detail Register');
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  updateRecord(form: NgForm) {
    this.service.formSubmitted = true;
    if(form.valid){
      console.log(this.service.formData.id)
      this.service.putFlightDetail()
      .subscribe({
        next: res => {
          this.service.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Updated successfully', 'Flight Detail Register');
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
