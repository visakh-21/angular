import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   data="your perfect banking partner"
   inputplaceholder="accountno"
    accno=''
    psw=''
    
    
  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:"abc123",balence:0},
  //   1001:{acno:1001,username:"manu",password:"abc124",balence:0},
  //   1002:{acno:1002,username:"ayan",password:"abc125",balence:0},
  //   1003:{acno:1000,username:"krish",password:"abc126",balence:0}



  // }



  constructor(private router:Router,private ds:DataService)
  {
    
  }
  ngOnInit(): void{
    
  }

//   login(a:any,b:any)
//   {
// var acnum=a.value
// var psw=b.value
// var userDetails=this.userDetails
// if(acnum in userDetails)
// {
//   if(psw==userDetails[acnum]["password"])
//   {
// alert("login sucess")
//   }
//   else{
//     alert("incorrect password")
//   }
// }
// else{
// alert("accno incorrrect not registered")
// }
//   }
    
  login()
  {
var acnum=this.accno
var psw=this.psw

const result=this.ds.login(acnum,psw)
if(result)
{
  alert('login sucess')
  this.router.navigateByUrl('dashboard')
}
else{

  alert('incorrect acno or password')
}
    // alert("login clicked")
  }
  // acnochange(event:any)
  // {
  //   this.accno=event.target.value
  //   // console.log(this.accno);
    
    
  // }
  // pswrdchange(event:any)
  // {
  //   this.psw=event.target.value
  // //   // console.log(this.psw);
    
  // }

}
