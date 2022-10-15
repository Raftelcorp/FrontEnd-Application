import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor (private service:RestapiService, private router:Router, private route:ActivatedRoute) { };


  ngOnInit(): void {
    this.Getallusers();
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

  moveToEdit(id:any){
    this.router.navigate(['/admin/knowledge/edit',id],{relativeTo: this.route});

  }

}


