import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  changeHeader: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        if(val.url==='/login'  || val.url==='/'){
        this.changeHeader=true;
      }
      else{
       this.changeHeader= false;
      }
    }
    })
  }

}
