import { Component, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/service/eventapi.service';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-register.event',
  templateUrl: './register.event.component.html',
  styleUrls: ['./register.event.component.css']
})
export class RegisterEventComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private event:EventApiService, private router:Router, public route:ActivatedRoute ) { 
  };

  id:any;
  checkoutForm = this.formBuilder.group({
    title: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    price: ['', Validators.required], 
    description: '',
    author: '',
    urlImage: '',

  });

  ngOnInit(): void {
     this.id = ( parseInt(this.route.snapshot.params['userId']) );
    console.log(this.id)
  }
onSubmit(): void {

    if(this.checkoutForm.controls['title'].value === ''){
      return
    }
    if(this.checkoutForm.controls['startDate'].value === ''){
      return
    }
    if(this.checkoutForm.controls['endDate'].value === ''){
      return
    }
    if(this.checkoutForm.controls['price'].value === ''){
      return
    }
    this.saveData();
    this.checkoutForm.reset();
    this.resetPage();
    this.router.navigate(['/']);

  }
  saveData(){
    this.event.saveEvent(this.id,this.checkoutForm.value).subscribe((result)=> {
      console.log(result);
    });
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.navigate(['./'],{relativeTo: this.route});
   
  }
}
