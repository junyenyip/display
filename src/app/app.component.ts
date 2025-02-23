import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'display';
  currentTime$: any = null;
  currentPSTTime$: any = null;
  locationData: any = null;
  weatherData: any = null;
  pstData: any = null;
  mytData: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.currentTime$ = interval(1000).pipe(
      map(() =>
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur', hour12: false })
      )
    );

    this.currentPSTTime$ = interval(1000).pipe(
      map(() =>
        new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: false })
      )
    );

    this.apiService.getLocationData().subscribe((data) => {
      if (data.length > 0) {
        this.locationData = data[0];  // Extract first object from array
      }
      console.log(this.locationData);
    });

    this.apiService.getWeatherData().subscribe((data) => {
      this.weatherData = data;  // Extract first object from array
      console.log(this.weatherData);
    });

    this.apiService.getPSTTime().subscribe((data) => {
      this.pstData = data;  // Extract first object from array
      console.log(this.pstData);
    });

    this.apiService.getMYTTime().subscribe((data) => {
      this.mytData = data;  // Extract first object from array
      console.log(this.mytData);
    });
  }

}
