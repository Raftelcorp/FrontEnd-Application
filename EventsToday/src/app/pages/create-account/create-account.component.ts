import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Account} from "../../model/account";
import {NgForm} from "@angular/forms";
import { UserapiService } from 'src/app/service/userapi.service';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/model/new-user';
import { AuthService } from 'src/app/service/auth.service';
import { LoginUser } from '../../model/login-user';
import { TokenService } from 'src/app/service/token.service'; 
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountData: Account;
  accountAuthData: NewUser;
  validData:boolean=true;
  loginUser!: LoginUser;
  isLogged = false;
  roles: string[] = [];
  @ViewChild('studentForm', {static:false})
  accountForm!: NgForm;


  constructor(private userService: UserapiService, private router:Router, private authService:AuthService ,  private tokenService: TokenService,
    ) {
    this.accountData= {} as Account;
    this.accountAuthData = {} as NewUser;

  
  }

  ngOnInit(): void {
  }

  addUser() {
    this.validData=true
    if(this.validData){



      this.authService.newuser(this.accountAuthData).subscribe((response: any) => {
        console.log(response);

       /* 
        this.loginUser = new LoginUser(
          this.accountAuthData.userName,
          this.accountAuthData.password);

          console.log( this.accountAuthData.userName +  this.accountAuthData.password)

          this.authService.login(this.loginUser).subscribe(
            data => {
              this.isLogged = true;
              this.tokenService.setToken(data.token);
              this.tokenService.setUserName(data.userName);
              this.tokenService.setAuthorities(data.authorities);
              this.roles = data.authorities;
              //this.router.navigate(['/']);
            },
            err => {
              this.isLogged = false;
              console.log(err.error.message);
            }
          ); 
                    */
          
         
      
      },
      err =>{ alert(err.error.message);}
      );

   
    }
    else{
      console.log('Invalid data');
      alert("Invalid data");
      return;
      
    }
    
  }

  onSubmit(){
    this.accountAuthData.authorities = ["user"];
    if(this.accountForm.form.valid){  
      this.addUser();  
      this.userService.saveUser(this.accountData).subscribe((response: any) => {
        console.log(response);
        });
      this.router.navigate(['/login']);

    }else{
      console.log('Invalid data');
      alert("Invalid data");
      return
    }
    

  }


}
