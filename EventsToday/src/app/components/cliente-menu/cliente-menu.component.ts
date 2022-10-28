import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cliente-menu',
  templateUrl: './cliente-menu.component.html',
  styleUrls: ['./cliente-menu.component.css']
})
export class ClienteMenuComponent implements OnInit {
  id="";
  constructor(private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params['id']
  }


  ngOnInit(): void {
    
  }

}
