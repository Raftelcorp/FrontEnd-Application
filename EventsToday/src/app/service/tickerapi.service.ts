import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketapiService {

  constructor(private http:HttpClient) { 
     
  }
  url="http://localhost:8080/api/tickets";
  getallTickets(id:any) : Observable<any>{ 
      return this.http.get(this.url+ `/${id}`);

  }

  getById(id:any) : Observable<any>{
    console.log("getting");
    return this.http.get(`${this.url}/${id}`);
  }
  getByUserId(id:any) : Observable<any> [] {
    let byId:any[]=[];
    this.getallTickets(id).subscribe(response=>{
        response.forEach((element:any)=>{
        console.log(element)
            if(id==element.ownerId.id){
           
                byId.push(element);
            }
        });
    });
    return byId;

  }
  delete(id:any) : Observable<any> {
    console.log(this.url+ `/${id}`)
    return this.http.delete(this.url+ `/${id}`);
  }
  saveTicket(userId:any,eventId:any, data:any) : Observable<any>{
    console.log("saving ticket");
    console.log(data);

    return this.http.post(`${this.url}/${userId}/${eventId}`, data);
  }
}