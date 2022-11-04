import { Component, OnInit,Input } from '@angular/core';
import { UserapiService } from 'src/app/service/usersapi.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:string;
  constructor(private userapiService:UserapiService,private route:ActivatedRoute,private router:Router) {
    this.name="";
    
  }
   
  ngOnInit(): void {
    console.log("obteniendo id de navbar: ",this.route.snapshot.params['id'])
    this.userapiService.GetById(this.route.snapshot.params['id']).subscribe((response)=>{
      this.name=response.name;
      console.log("obteniendo nombre: ");
      console.log(this.name);
    })
  }
  toHome(){
    this.router.navigate([''],{relativeTo: this.route});
   }

}
