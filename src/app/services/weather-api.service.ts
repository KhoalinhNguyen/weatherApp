import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherInterface } from '../models/weatherAPI.models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  fetchWeatherData(placeName: string): Observable<WeatherInterface> {
    return this.http.get<WeatherInterface>(environment.baseURL, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('appid','e0495dec22b20e061a98cafda3bf03e9')
        .set('q', placeName)
        .set('units', 'imperial')
        .set('mode', 'json'),
    });
  }

  getLocation(lat: any, long: any) {
    var geoAPI = `${environment.reverseGeoCodeURL}latitude=${lat}&longitude=${long}&localityLanguage=en`;

    return this.http.get<any>(geoAPI);
  }
}
