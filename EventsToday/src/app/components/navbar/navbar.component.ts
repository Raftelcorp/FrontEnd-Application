import { Component, OnInit,Input } from '@angular/core';
import { UserapiService } from 'src/app/service/userapi.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Account } from 'src/app/model/account';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin = false;
  roles: string[]=[];
  name:string;
  account:Account;
  userId:any;
  user:any;
  constructor(public dialog: MatDialog,private userapiService:UserapiService,private route:ActivatedRoute,private router:Router, private tokenService:TokenService) {
    this.name="";
    this.account={} as Account;
  }
   
  ngOnInit(): void {
    console.log("obteniendo id de navbar: ",this.route.snapshot.params['id'])
    this.userapiService.GetById(this.route.snapshot.params['id']).subscribe((response)=>{
      this.name=response.name;
      this.user=response;
      console.log("obteniendo nombre: ");
      console.log(this.name);
    });

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    console.log( this.isAdmin);
  }
  toHome(){
    this.router.navigate(['./'],{relativeTo: this.route});
   }
   openDialog(email:any){
    let dialogRef = this.dialog.open(  DialogContentExampleDialog);
    dialogRef.componentInstance.setUser(this.user,email )
   }

   onLogOut(): void{
    this.tokenService.logOut();
    this.router.navigate(['/login'],{relativeTo: this.route});
   // window.location.reload();
  }

}
@Component({
  selector: 'edit-account-dialog',
  templateUrl: 'edit-account-dialog.html',
})
export class DialogContentExampleDialog {
  accountEdit:Account;
  user:any;
  email:any;
  constructor(private userapiService:UserapiService,private route:ActivatedRoute,private router:Router, private authUserService:AuthService ){
    this.accountEdit={}as Account;
  }
  setUser(user:any, email:any){
    this.user = user;
    this.email = email;
    console.log(this.user)
    console.log(this.email)
  }

  updateUser(){
    let newU ={

      "name": "",
      "email": "",
     }
     newU.name = this.user.name;
     newU.email = this.user.email;
     console.log(this.user)
     console.log(this.email)
    this.authUserService.editUser(this.email, newU ).subscribe(response=>{
      
    });
    this.userapiService.editUser(this.user.id, this.user).subscribe(response=>{
    
   });
  // this.resetPage();
  }

  resetPage(){
  
    window.location.reload();
   
  }



 

}