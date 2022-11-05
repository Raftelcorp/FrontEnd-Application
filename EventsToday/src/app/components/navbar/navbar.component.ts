import { Component, OnInit,Input } from '@angular/core';
import { UserapiService } from 'src/app/service/userapi.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Account } from 'src/app/model/account';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:string;
  account:Account;
  userId:any;
  user:any;
  constructor(public dialog: MatDialog,private userapiService:UserapiService,private route:ActivatedRoute,private router:Router) {
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
    })
  }
  toHome(){
    this.router.navigate(['./'],{relativeTo: this.route});
   }
   openDialog(){
    let dialogRef = this.dialog.open(  DialogContentExampleDialog);
    dialogRef.componentInstance.setUser(this.user)
   }
}
@Component({
  selector: 'edit-account-dialog',
  templateUrl: 'edit-account-dialog.html',
})
export class DialogContentExampleDialog {
  accountEdit:Account;
  user:any;
  constructor(private userapiService:UserapiService){
    this.accountEdit={}as Account;
  }
  setUser(user:any){
    this.user = user;
  }

  updateUser(){
    this.userapiService.editUser(this.user.id, this.user).subscribe(response=>{
    
   });
  }
 

}