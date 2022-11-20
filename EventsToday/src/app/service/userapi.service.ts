import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    url= 'https://events-today.herokuapp.com/api/customers'
   // url="http://localhost:8080/api/customers";

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  
    
    GetallUsers() : Observable<any>{ 
        return this.http.get(this.url);
  
    }
  
    GetById(id:any) : Observable<any>{
      console.log("getting");
      return this.http.get<any>(`${this.url}/${id}`, this.httpOptions);
    }
    GetByEmail(email:any) : Observable<any>{
      console.log("getting");
      return this.http.get<any>(`${this.url}/searchByEmail/${email}`, this.httpOptions);
    }
    editUser(id:any,data:any){
      console.log("editing")
      console.log(data);
      return this.http.patch(`${this.url}/${id}`,data, this.httpOptions);
    }
    saveUser(data:any): Observable<any>{
      console.log("saving");
      console.log(`${this.url}`,data, this.httpOptions);
  
      return this.http.post(this.url, data, this.httpOptions);
    }
    delete(id:any) : Observable<any> {
      console.log(this.url+ `/${id}`)
      return this.http.delete(this.url+ `/${id}`);
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