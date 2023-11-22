import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddReceiverComponent } from './add-receiver/add-receiver.component';
import { MyReceiverComponent } from './my-receiver/my-receiver.component';
import{EditComponent} from "./edit/edit.component"
import { AuthGuard } from './gaurds/auth.guard';
import { SendMoneyComponent } from './send-money/send-money.component';

const routes: Routes = [
  { 
    path: '', component: LoginComponent
  },
  {
    path: 'addReceiver',canActivate:[AuthGuard], component: AddReceiverComponent 
  },
  {
    path: 'myReceiver', canActivate:[AuthGuard], component: MyReceiverComponent
  },
  {
    path: 'editReceiver/:id', canActivate:[AuthGuard], component: EditComponent
  },
  {
    path: 'sendMoney', canActivate:[AuthGuard], component: SendMoneyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
