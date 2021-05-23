import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights.service';

export class searchFlight {
  public source?: string;
  public destination?: string;
  public departure_time?: string;
  public arrival_time?: string;
}

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {
  
  model = new searchFlight();
  flights: any;

  cities: string[] = [
    'Toronto',
    'Rome',
    'Madrid',
    'Moscow'
];
  constructor(private flightService: FlightsService) { 
  }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(
      res => { 
        this.flights = res;
        //console.log(this.flights[1]);
       },
      err => console.log(err)
    )

    
  }

  onSubmit(Searchform: searchFlight) {
    console.log(Searchform)
  }

  searchFligths(){
    console.log(this.flights);
  }
}