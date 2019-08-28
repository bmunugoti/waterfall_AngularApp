import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import {UserService} from '../_services/user.service'
import { User } from '../_models';
import { HttpResponseBase } from '@angular/common/http';
import { error } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sub:any;
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  laodingval:boolean=false;
  loading:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService:  UserService) { }

  ngOnInit() {
//     this.userService.getAll().subscribe((data:any) => {
     
//       console.log(data);
//     }),error((e:HttpResponseBase)=>{
// console.log(e.statusText);
//     })
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.loginForm.invalid);
     this.invalidLogin = false;
     this.submitted = true;
     if (this.loginForm.invalid) {
       this.invalidLogin = true;   
           this.loading=false;   
       return;
     }
     else{
       this.loading=true;  
       this.userService.setName(this.loginForm.controls.email.value);
       this.router.navigate(['Incubator']);      //  this.User=new User();
      //  this.User.LdapAlias=this.loginForm.controls.email.value;
      //  this.User.password=this.loginForm.controls.password.value;
       
     }
    
   
     
   }
}
