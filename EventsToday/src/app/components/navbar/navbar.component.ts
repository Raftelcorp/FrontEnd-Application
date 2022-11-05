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
  constructor(public dialog: MatDialog,private userapiService:UserapiService,private route:ActivatedRoute,private router:Router) {
    this.name="";
    this.account={} as Account;
  }
   
  ngOnInit(): void {
    console.log("obteniendo id de navbar: ",this.route.snapshot.params['id'])
    this.userapiService.GetById(this.route.snapshot.params['id']).subscribe((response)=>{
      this.name=response.name;
      console.log("obteniendo nombre: ");
      console.log(this.name);
    })
  }
  toHome(){
    this.router.navigate(['./'],{relativeTo: this.route});
   }
   openDialog(){
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.account=result;
      this.account.id=(parseInt( this.route.snapshot.params['id']));
      console.log(this.account);
      this.userapiService.editUser(this.account.id,this.account).subscribe(response=>{
        console.log(response);
      });
    });
   }
}
@Component({
  selector: 'edit-account-dialog',
  templateUrl: 'edit-account-dialog.html',
})
export class DialogContentExampleDialog {
  accountEdit:Account;
  constructor(private userapiService:UserapiService){
    this.accountEdit={}as Account;
  }
  
}