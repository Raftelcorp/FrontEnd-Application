import { Component, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TicketapiService } from 'src/app/service/tickerapi.service';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  id="";
  event:any;
  userId:any;
  ticket:Ticket;

  constructor (private ticketApiService:TicketapiService,private service:EventApiService, private router:Router, private route:ActivatedRoute) { 
    this.ticket={} as Ticket;
  };

  ngOnInit(): void {
    this.id=this.route.snapshot.params['eventId'];
    console.log(this.id);

    this.GetIdEvent();

    if(this.route.parent){
      this.route.parent.params.subscribe(params=>{
        this.userId=params['id'];
      })
    }
  }


  GetIdEvent(){
    this.service.GetById(this.id).subscribe(response => {
    this.event = response;
    console.log(this.event);
    })

  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.navigate(['./'],{relativeTo: this.route});
   
  }

  moveToBuy(id:any){
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
