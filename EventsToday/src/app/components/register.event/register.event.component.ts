import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service'; 
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register.event',
  templateUrl: './register.event.component.html',
  styleUrls: ['./register.event.component.css']
})
export class RegisterEventComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private event:RestapiService, private router:Router, private route:ActivatedRoute ) { 
  };

  checkoutForm = this.formBuilder.group({
    title: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    price: ['', Validators.required], 
    description: '',
    author: '',
    urlImage: '',
    ownerId:''
  });


  ngOnInit(): void {
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
    if(this.route.parent){
      this.route.parent.params.subscribe(params=>{
        this.checkoutForm.controls['ownerId']=params['id'];
      })
    }
    this.saveData();
    this.checkoutForm.reset();
    this.resetPage();
    this.router.navigate(['/']);

  }
  saveData(){
    this.event.saveEvent(this.checkoutForm.value).subscribe((result)=> {
      console.log(result);
    });
  }

  resetPage(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.navigate(['./'],{relativeTo: this.route});
   
  }
}
