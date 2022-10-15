import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { 
     
  }
  url="http://localhost:3000/api/v1/events";
  GetallUsers(){ 
      return this.http.get(this.url);

  }

  saveEvent(data:any){
    console.log("saving");
    console.log(data);

    return this.http.post(this.url, data);
  }
}
