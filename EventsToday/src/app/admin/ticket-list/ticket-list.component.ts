import { Component, OnInit } from '@angular/core';
import { TicketapiService } from 'src/app/service/tickerapi.service';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { UserapiService } from 'src/app/service/userapi.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets:any;
  id:any;
  eventname:any;
  user:any;
  constructor(private router:Router, private eventApiSerice:EventApiService,private ticketApiService:TicketapiService,private userApiService:UserapiService, private activateRoute: ActivatedRoute, ) { }
  
  ngOnInit(): void {

    this.id = this.activateRoute.snapshot.paramMap.get('userId'); 
    console.log("id desde el hijo:", this.id);
    this.getAllTickets();
   // this.eventname = this.getEventName();
    this.getUser(this.id);

  }
  deleteTicket(id:any){
    console.log("deleteTicket")
    this.ticketApiService.delete(id).subscribe(resp=>{
      console.log(resp)
    });
   // console.log(id);
   // alert("Ticket deleted");
  }
  getAllTickets(){
    this.tickets= this.ticketApiService.getByUserId(this.id);
    console.log(this.tickets);
  }
 
  getUser(id:any){

    this.userApiService.GetById(id).subscribe(response=>{
     
      this.user=response;
    
    })
  }
}
