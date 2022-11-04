import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Account} from "../../model/account";
import {NgForm} from "@angular/forms";
import { UserapiService } from 'src/app/service/userapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accountData: Account;
  validData:boolean=true;


  @ViewChild('studentForm', {static:false})
  accountForm!: NgForm;


  constructor(private userService: UserapiService, private router:Router) {
    this.accountData= {} as Account;
  }

  ngOnInit(): void {
  }

  addUser() {
    this.validData=true
    if(this.validData){
      this.accountData.id = 0;
      this.userService.saveUser(this.accountData).subscribe((response: any) => {
      console.log(response);
    });
    }
    else{
      console.log('Invalid data')
    }
    
  }


  onSubmit(){
    if(this.accountForm.form.valid){  
      this.addUser();  
    }else{
      console.log('Invalid data');
    }
    this.router.navigate(['/login']);

  }


}
