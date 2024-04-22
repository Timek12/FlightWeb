import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailService {

  url:string = environment.apiBaseUrl + '/flights';
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: res=> {
        console.log(res);
      },
      error: err=> {
        console.log(err);
      }
    });
  }
}
