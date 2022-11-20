
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../model/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login-user';
import { JwtDTO } from '../model/jwt-dto';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    authURL = 'https://events-today.herokuapp.com/auth/';
   // authURL = 'http://localhost:8080/auth/';
  
    constructor(private httpClient: HttpClient) { }
  
    public newuser(newUser: NewUser): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'newuser', newUser);
    }
  
    public login(loginUser: LoginUser): Observable<JwtDTO> {
      return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUser);
    }

    public getUserByUsername(username: String): Observable<any> {
        return this.httpClient.get<any>(this.authURL + 'get/' + username);
      }

    public editUser(id:any , newUser:any): Observable<any> {
        return this.httpClient.patch<any>(this.authURL + id , newUser);
      }
  }


