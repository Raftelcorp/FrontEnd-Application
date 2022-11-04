import { Component, OnInit } from '@angular/core';
import { TicketapiService } from 'src/app/service/tickerapi.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets:any;
  id:any;
  constructor(private router:Router, private eventApiSerice:RestapiService,private ticketApiService:TicketapiService,private activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    if(this.activateRoute.parent){
      this.activateRoute.parent.params.subscribe(params=>{
        this.id=params['id'];
      })
    }
    console.log("id desde el hijo:", this.id);
    this.getAllTickets();

  }
  getAllTickets(){
    
    this.tickets= this.ticketApiService.getByUserId(this.id);
    console.log(this.tickets);
  }
  getEventName(id:any){
    let eventname="";
    this.eventApiSerice.GetById(id).subscribe(response=>{
      eventname=response.title;
    })
    return eventname;
  }
}
