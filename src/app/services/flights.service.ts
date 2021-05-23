import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/Flight';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { 

  }
  getFlights(){
      return this.http.get(`${this.API_URI}/flights`);
  }

  getFlight(id: string){
    return this.http.get(`${this.API_URI}/flights/${id}`);
  }

  deleteFlight(id: string){
    return this.http.delete(`${this.API_URI}/flights/${id}`);
  }

  saveFlight(flight: Flight){
      return this.http.post(`${this.API_URI}/flights`, flight);
  }

  updateFlight(id: string, updatedFlight: Flight): Observable<any>{
    return this.http.put(`${this.API_URI}/flights/${id}`, updatedFlight);
  }

}
