import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventApiService {

  constructor(private http:HttpClient) { 
     
  }
  url="http://localhost:8080/api/events";
  GetallEvents(){ 
      return this.http.get(this.url);

  }

  GetById(id:any): Observable<any>{
    console.log("getting");
    return this.http.get(`${this.url}/${id}`);
  }

  saveEvent(id:any,data:any): Observable<any>{
    console.log("saving");
    console.log(id,data);

    return this.http.post(this.url+ `/${id}`, data);
  }
}
