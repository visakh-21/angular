import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  constructor() { }
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balence:0,transaction:[]},
    1001:{acno:1001,username:"manu",password:"abc124",balence:0,transaction:[]},
    1002:{acno:1002,username:"ayan",password:"abc125",balence:0,transaction:[]},
    1003:{acno:1003,username:"krish",password:"abc126",balence:0,transaction:[]}



  }
  register(uname:any,acno:any,psw:any)
  {
    if(acno in this.userDetails)
    {
      return false
    }
    else{
      this.userDetails[acno]={acno,username:uname,pssword:psw,balence:0}
      return true
    }
  }
  login(acno:any,psw:any){

    var userDetails=this.userDetails
if(acno in userDetails)
{
  if(psw==userDetails[acno]["password"])
  {
    userDetails[acno]["username"]
    this.currentAcno=acno
    return true
  }
  else{
    return false
  }
}
else{
  return false
}


  }

  deposit(acnum:any,password:any,amount:any)
  {

    let userDetails=this.userDetails
    var amnt=parseInt(amount)

    if(acnum in userDetails)
    {
      if(password==userDetails[acnum]["password"])
      {

        userDetails[acnum]["balence"]+=amnt

        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

        return userDetails[acnum]["balence"]
      }
      else{
        return false
      }
    }
      else
      {
        return false
      }
    }
    withdraw(acnum:any,password:any,amount:any)
    {
  
      let userDetails=this.userDetails
      var amnt=parseInt(amount)
  
      if(acnum in userDetails)
      {
        if(password==userDetails[acnum]["password"])
        {
          if(amnt<=userDetails[acnum]["balence"])

          {
userDetails[acnum]["balence"]-=amnt
userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
          
  
          userDetails[acnum]["balence"]
          }
  
          return userDetails[acnum]
        }
        else{
          alert("insufficient balence")
        
          return false
        }
      }
      
        else
        {
          alert("incorrect password")
          return false
        }
   
      }
      
      getTransaction(acno:any)  
      {
return this.userDetails[acno]["transaction"]
      }
      }
  


