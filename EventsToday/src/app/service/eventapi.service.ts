import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(private http:HttpClient) { 
     
  }
  url="http://localhost:8080/api/events";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  GetallEvents(){ 
      return this.http.get(this.url , this.httpOptions);

  }

  GetById(id:any): Observable<any>{
    console.log("getting");
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  saveEvent(id:any,data:any): Observable<any>{
    console.log("saving");
    console.log(id,data);

    return this.http.post(this.url+ `/${id}`, data,  this.httpOptions);
  }
}
