import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { LoginComponent } from './components/login/login.component';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterEventComponent } from './components/register.event/register.event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { EventComponent } from './components/events/event.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component'
import { TicketsComponent } from './components/tickets/tickets.component'
import { DialogContentExampleDialog } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountRecoveryComponent,
    PasswordChangeComponent,
    RegisterEventComponent,
    EventComponent,
    LoginComponent,
    NavbarComponent,
    MoreInfoComponent,
    CreateAccountComponent,
    ClienteMenuComponent,
    TicketsComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialExampleModule,
    FormsModule,ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
