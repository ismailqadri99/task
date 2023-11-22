import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddReceiverComponent } from './add-receiver/add-receiver.component';
import { MyReceiverComponent } from './my-receiver/my-receiver.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SendMoneyComponent } from './send-money/send-money.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddReceiverComponent,
    MyReceiverComponent,
    EditComponent,
    SendMoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
