import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class UserapiService {
  
    constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
       
    }
    url="http://localhost:8080/api/customers";
    
    GetallUsers() : Observable<any>{ 
        return this.http.get(this.url);
  
    }
  
    GetById(id:any) : Observable<any>{
      console.log("getting");
      return this.http.get<any>(`${this.url}/${id}`);
    }
    editUser(id:any,data:any){
      console.log("editing")
      console.log(data);
      return this.http.patch(`${this.url}/${id}`,data);
    }
    saveUser(data:any): Observable<any>{
      console.log("saving");
      console.log(data);
  
      return this.http.post(this.url, data);
    }
    logIn(data:any){
      this.http.get<any>(this.url).subscribe(
        response=>{
          const user=response.find((a:any)=>{
            return a.email===data.email && a.password===data.password
          });
          if(user){
            console.log(user.id)
            alert("Succesfull!!")
            this.router.navigate(['client.menu',user.id],{relativeTo: this.route})
          }
          else{
            alert("Account not found")
          }
        }
      )
    }
  }