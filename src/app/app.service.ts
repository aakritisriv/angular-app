import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getStatus(){
    return this.http.get("http://localhost:3000").pipe(
      tap((data) => {
        return data; })
    );
  }

  startFunctionQueue(){
    return this.http.post("http://localhost:3000?mode=start",null).pipe(
      tap((data) => {
        return data; 
      })
    )

  }

  stopFunctionQueue(){

    return this.http.post("http://localhost:3000?mode=stop", null).pipe(
      tap((data) => {
        return data; })
    );

  }

}
