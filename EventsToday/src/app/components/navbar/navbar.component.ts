import { Component, OnInit,Input } from '@angular/core';
import { UserapiService } from 'src/app/service/userapi.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() clientId:any;
  name:string;
  constructor(private userapiService:UserapiService,private route:ActivatedRoute,private router:Router) {
    this.name="";
    
  }
   
  ngOnInit(): void {
    this.userapiService.GetById(this.clientId).subscribe((response)=>{
     this.name=response.name;
      console.log("obteniendo nombre: ");
      console.log(this.name);
    })
  }
  toHome(){
    this.router.navigate([`/client.menu/${this.clientId}/events`],{relativeTo: this.route});
   }

}
