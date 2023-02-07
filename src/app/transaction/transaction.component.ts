import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionData:any

  constructor(private ds:DataService)
  {
this.transactionData=this.ds.getTransaction(this.ds.currentAcno)
  }

  ngOnInit(): void {
    
  }

}
