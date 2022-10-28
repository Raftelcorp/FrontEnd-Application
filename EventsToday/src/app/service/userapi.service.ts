import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
  export class UserapiService {
  
    constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
       
    }
    url="http://localhost:3000/api/v1/users";
    GetallUsers(){ 
        return this.http.get(this.url);
  
    }
  
    GetById(id:any){
      console.log("getting");
      return this.http.get<any>(`${this.url}/${id}`);
    }
  
    saveUser(data:any){
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