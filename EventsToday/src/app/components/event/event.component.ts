import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private service:RestapiService) { }

  ngOnInit(): void {
    this.Getallusers();
  }
  displayedColumns: string[] = ['title', 'author', 'date', 'price','image'];


  userdata:any;
  Getallusers(){
    this.service.GetallUsers().subscribe(response => {
    this.userdata = response;
    console.log(this.userdata);
    })

  }
}

