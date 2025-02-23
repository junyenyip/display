import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Penang&limit=5&appid=0b14fe91eb0548e67cc8956d170f24cc';
  apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=5.2632&lon=100.4846&appid=0b14fe91eb0548e67cc8956d170f24cc'

  timePSTGet = 'https://timeapi.io/api/time/current/zone?timeZone=America%2FLos_Angeles'
  timeMYTGet = 'https://timeapi.io/api/time/current/zone?timeZone=Asia/Kuala_Lumpur'

  constructor(private http: HttpClient) { }

  getLocationData(): Observable<any[]> {  // Expecting an array
    return this.http.get<any[]>(this.apiUrl);
  }

  getWeatherData(): Observable<any[]> {  // Expecting an array
    return this.http.get<any[]>(this.apiUrlWeather);
  }

  getPSTTime(): Observable<any[]> {  // Expecting an array
    return this.http.get<any[]>(this.timePSTGet);
  }

  getMYTTime(): Observable<any[]> {  // Expecting an array
    return this.http.get<any[]>(this.timeMYTGet);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}