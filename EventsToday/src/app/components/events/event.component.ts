import { Component, OnInit ,Input} from '@angular/core';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketapiService } from 'src/app/service/tickerapi.service';
import { Ticket } from 'src/app/model/ticket';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() userId:any;
  ticket:Ticket;
  constructor (private ticketApiService:TicketapiService, private service:EventApiService, private router:Router, private route:ActivatedRoute,private formBuilder:FormBuilder) { 
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

  events:any;
  Getallusers(){
    this.service.GetallUsers().subscribe(response => {
    this.events = response;
    console.log(this.events);
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
    this.ticketApiService.saveTicket(this.userId, eventId ,this.ticket).subscribe(response=>{
      console.log(response);
    })
  } 

}