import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class UserapiService {

    constructor(private http:HttpClient) { 

    }
    url="http://localhost:3000/api/v1/users";
    GetallUsers(){ 
        return this.http.get(this.url);

    }

    GetById(id:any){
      console.log("getting");
      return this.http.get(${this.url}/${id});
    }

    saveUser(data:any){
      console.log("saving");
      console.log(data);

      return this.http.post(this.url, data);
    }
  }
