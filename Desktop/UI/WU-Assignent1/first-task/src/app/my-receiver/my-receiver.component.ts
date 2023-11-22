import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-receiver',
  templateUrl: './my-receiver.component.html',
  styleUrls: ['./my-receiver.component.css']
})
export class MyReceiverComponent implements OnInit {

  constructor( private data: DataService, private route: Router) { }
  receiverData: any=[];

  ngOnInit(): void {
    this.data.getAllData().subscribe((allData)=> {
      console.log(allData);
      this.receiverData=allData;
      }
    ) 
    }
  
    addReceiver() {
      this.route.navigate(['/addReceiver'])
    }
  deleteUser(Id: number){
    console.log(Id);

    this.data.deleteReceiver(Id).subscribe((res)=>{
      this.receiverData.splice(Id-1,1);
      this.route.navigate(['/myReceiver']);
      console.log("deleted", res);
    })
  }  
  ngDocheck():void{
    console.log(this.receiverData);  
  }
  
  }

  

