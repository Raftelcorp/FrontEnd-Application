import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; 
import { Router } from '@angular/router';
import { LoginUser } from '../../model/login-user';
import { TokenService } from 'src/app/service/token.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserapiService } from 'src/app/service/userapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {
  customerId:any;
   user : any;
  isLogged = false;
  roles: string[] = [];
  loginUser!: LoginUser;
  form = new FormGroup({
    userName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router ,
    private customerService:UserapiService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(
      this.form.get('userName')?.value ?? '',
      this.form.get('password')?.value ?? '');

    this.authService.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.findCustomerByEmail();
      
      },
      err => {
        this.isLogged = false;
       alert("Invalid data");
      }
    );
  }
  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }


  findCustomerByEmail(){

    let username = sessionStorage.getItem('AuthUserName') || '{}';
    console.log(username);

    this.authService.getUserByUsername(username).subscribe(response => {
      this.user = response;
      console.log(this.user.email);

      this.customerService.GetByEmail(this.user.email).subscribe(response => {
        this.customerId = response;
        console.log(this.customerId);
        this.router.navigate(['/client.menu', this.customerId.id],{relativeTo: this.route})
  
        });
  
      });

  }

}