import { Component, OnInit, Input } from '@angular/core';

import { EventApiService } from 'src/app/service/eventapi.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserapiService } from 'src/app/service/userapi.service'; 
import { Ticket } from 'src/app/model/ticket';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input() userId:any;
  ticket:Ticket;
  constructor (private customerService:UserapiService, private service:EventApiService, private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder) { 
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

  users:any;
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
}
