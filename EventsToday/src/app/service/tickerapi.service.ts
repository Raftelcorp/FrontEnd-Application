import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketapiService {

  constructor(private http:HttpClient) { 
     
  }
  url="http://localhost:8080/api/tickets";
  getallTickets(){ 
      return this.http.get<any>(this.url);

  }

  getById(id:any){
    console.log("getting");
    return this.http.get(`${this.url}/${id}`);
  }
  getByUserId(id:any){
    let byId:any[]=[];
    this.getallTickets().subscribe(response=>{
        response.forEach((element:any)=>{
            if(id===element.userId){
                byId.push(element);
            }
        });
    });
    return byId;
  }
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  saveTicket(data:any){
    console.log("saving");
    console.log(data);

    return this.http.post(this.url, data);
  }
}