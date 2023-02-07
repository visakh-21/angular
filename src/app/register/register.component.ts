import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  //create reactive form of register form

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder)
  {

  }
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]')]]
  })

  ngOnInit(): void {

  }
  register()
    {

// let userDetails=this.ds.userDetails
var uname=this.registerForm.value.uname
var acno=this.registerForm.value.acno
var psw=this.registerForm.value.psw
if(this.registerForm.valid)
{

  


const result=this.ds.register(uname,acno,psw)

if(result)
{
  alert('registered')
  this.router.navigateByUrl("")

}
else{
  alert("alredy registered")
}


    }
   else{


    alert("invalid")
   }
  
  }
}
