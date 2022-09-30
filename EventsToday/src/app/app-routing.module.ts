import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterEventComponent } from './components/register.event/register.event.component';
import { PublishedEventComponent } from './components/published-event/published-event.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { EventComponent } from './components/event/event.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
{path:'register.event',component:RegisterEventComponent},
 {path:'published.event',component:PublishedEventComponent},
 {path:'login',component:LoginComponent},

 {path:'password.change',component:PasswordChangeComponent},
 {path:'account.recovery',component:AccountRecoveryComponent},
 {path:'',component:EventComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
