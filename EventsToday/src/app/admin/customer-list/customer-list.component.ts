import { Component, OnInit, Input } from '@angular/core';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserapiService } from 'src/app/service/userapi.service'; 
import { AuthService } from 'src/app/service/auth.service';
import { Account } from 'src/app/model/account';
import {MatDialog} from '@angular/material/dialog';
import { Ticket } from 'src/app/model/ticket';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input() userId:any;
  ticket:Ticket;
  constructor (public dialog:MatDialog, private customerService:UserapiService, private service:EventApiService, private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder) { 
    this.ticket={} as Ticket;
  };

  
  ngOnInit(): void {
    this.Getallusers();

    if(this.route.parent){
      this.route.parent.params.subscribe(params=>{
        this.userId=params['id'];
      })
    }
  }

  user:any;
  users:any;
  customerId:any;
  Getallusers(){
    this.customerService.GetallUsers().subscribe(response => {
    this.users = response;
    console.log(this.users);
    })

  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.navigate(['./'],{relativeTo: this.route});
   
  }

  moveToInfo(id:any){
    this.router.navigate(['./more.info',id],{relativeTo: this.route});
  }
  buyTicket(eventId:any){
    //this.ticket.userId=this.userId;
   // this.ticket.eventId=eventId;
    console.log("userid")
    console.log(this.userId)
   
  } 

  deleteCustomer(id:any){
    this.customerService.delete(id).subscribe(response => {
      });

      //this.resetPage();
  }
  goToUserTickets(id:any){
    this.router.navigate(['../ticket-list',id],{relativeTo: this.route});
  }

  openDialog(id:any, email:any){
    let dialogRef = this.dialog.open( DialogContentAdmin);
    this.customerService.GetById(id).subscribe((resp)=>{
      dialogRef.componentInstance.setUser(resp, email)
    })
  
   }


}
@Component({
  selector: 'edit-customer-dialog',
  templateUrl: 'edit-customer-dialog.html',
})
export class DialogContentAdmin {
  accountEdit:Account;
  user:any;
  email:any;
  constructor(private userapiService:UserapiService,private route:ActivatedRoute,private router:Router, private authUserService:AuthService){
    this.accountEdit={}as Account;
  }
  setUser(user:any, email:any){
    this.user = user;
    this.email = email;
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