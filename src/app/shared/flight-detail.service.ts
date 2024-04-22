import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { FlightDetail, UpsertFlightDetail } from './flight-detail.model';
import { NgForm } from '@angular/forms';

interface ApiResponse {
  statusCode: number;
  isSuccess: boolean;
  errors: any[];
  result: FlightDetail[];
}

@Injectable({
  providedIn: 'root'
})

export class FlightDetailService {

  url:string = environment.apiBaseUrl + '/flights';
  list: FlightDetail[] = [];
  formData : UpsertFlightDetail = new UpsertFlightDetail();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }
  
  refreshList() {
    this.http.get<ApiResponse>(this.url)
    .subscribe({
      next: res => {
        this.list = res.result;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  postFlightDetail() {
    return this.http.post(this.url, this.formData);
  }

  putFlightDetail() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  deleteFlightDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) { 
    form.form.reset();
    this.formData = new UpsertFlightDetail();
    this.formSubmitted = false;
  }
}