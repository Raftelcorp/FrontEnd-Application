import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RegisterEventComponent } from './components/register.event/register.event.component';
import { PublishedEventComponent } from './components/published-event/published-event.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { EventComponent } from './components/events/event.component';
import { LoginComponent } from './components/login/login.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'register.event',component:RegisterEventComponent},
 {path:'published.event',component:PublishedEventComponent},
 {path:'login',component:LoginComponent},
  {path:'client.menu/:id',component:ClienteMenuComponent},
 {path:'password.change',component:PasswordChangeComponent},
 {path:'account.recovery',component:AccountRecoveryComponent},

 {path:'more.info/:id',component:MoreInfoComponent},
 {path:'create-account',component:CreateAccountComponent},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
