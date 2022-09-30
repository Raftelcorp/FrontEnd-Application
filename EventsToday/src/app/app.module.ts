import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountRecoveryComponent,
    PasswordChangeComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
