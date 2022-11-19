import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccountRecoveryComponent } from './pages/account-recovery/account-recovery.component';
import { PasswordChangeComponent } from './pages/password-change/password-change.component';
import { LoginComponent } from './pages/login/login.component';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterEventComponent } from './pages/register.event/register.event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { EventComponent } from './pages/events/event.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoreInfoComponent } from './pages/more-info/more-info.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component'
import { TicketsComponent } from './pages/tickets/tickets.component'
import { DialogContentExampleDialog } from './components/navbar/navbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginAuthComponent } from './auth/login-auth/login-auth.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { EventListComponent } from './admin/event-list/event-list.component';

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
    DialogContentExampleDialog,
    RegisterComponent,
    LoginAuthComponent,
    CustomerListComponent,
    EventListComponent
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
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
