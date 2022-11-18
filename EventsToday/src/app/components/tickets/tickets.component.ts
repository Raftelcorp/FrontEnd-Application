import { Component, OnInit } from '@angular/core';
import { TicketapiService } from 'src/app/service/tickerapi.service';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { UserapiService } from 'src/app/service/userapi.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets:any;
  id:any;
  eventname:any;
  user:any;
  constructor(private router:Router, private eventApiSerice:EventApiService,private ticketApiService:TicketapiService,private userApiService:UserapiService, private activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    if(this.activateRoute.parent){
      this.activateRoute.parent.params.subscribe(params=>{
        this.id=params['id'];
      })
    }
    console.log("id desde el hijo:", this.id);
    this.getAllTickets();
    this.getEventName(this.id);
    this.getUser(this.id);

  }
  deleteTicket(id:any){
    this.ticketApiService.delete(id);
    console.log(typeof(id));
    alert("Ticket deleted");
  }
  getAllTickets(){
    this.tickets= this.ticketApiService.getByUserId(this.id);
    console.log(this.tickets);
  }
  getEventName(id:any){

    this.eventApiSerice.GetById(id).subscribe(response=>{
     
      this.eventname=response;
    
    })
    return this.eventname;
  }
  getUser(id:any){

    this.userApiService.GetById(id).subscribe(response=>{
     
      this.user=response;
    
    })
  }
}
