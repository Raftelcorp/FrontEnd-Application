import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { UserapiService } from 'src/app/service/userapi.service'; 
import { ActivatedRoute } from '@angular/router';
import { EventApiService } from 'src/app/service/eventapi.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInForm!:FormGroup;

  constructor(private apiservice:EventApiService,private formBuilder: FormBuilder, private userapiService:UserapiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.logInForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  onSubmit(){
    this.userapiService.logIn(this.logInForm.value)

  }
}
