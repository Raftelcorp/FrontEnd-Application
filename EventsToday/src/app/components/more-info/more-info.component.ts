import { Component, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/service/eventapi.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  id="";
  event:any;

  constructor (private service:EventApiService, private router:Router, private route:ActivatedRoute) { };

  ngOnInit(): void {
    this.id=this.route.snapshot.params['eventId'];
    console.log(this.id);

    this.GetIdEvent();
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

}
