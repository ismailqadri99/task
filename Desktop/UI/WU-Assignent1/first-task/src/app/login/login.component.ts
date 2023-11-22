import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../Service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string;
  password: string;

  constructor(private router: Router, private auth: AuthGaurdService) { }

  Login(data: any){
  this.auth.login(data).subscribe(
    //callback func
    (result:any) => {
      this.router.navigateByUrl('/myReceiver');
    },
    (err: Error) => {
      console.log("wrong credentials");
    }
  );
  }
}
