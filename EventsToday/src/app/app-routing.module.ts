import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RegisterEventComponent } from './components/register.event/register.event.component';
import { PublishedEventComponent } from './components/published-event/published-event.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { AccountRecoveryComponent } from './components/account-recovery/account-recovery.component';
import { EventComponent } from './components/events/event.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { MoreInfoComponent } from 'src/app/components/more-info/more-info.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};



const routes: Routes = [
  {path:'',component:LoginComponent},
 {path:'login',component:LoginComponent},
  {path:'client.menu/:id',component:ClienteMenuComponent,
  children:[
    {path:'', redirectTo:'events',pathMatch:'full'},
    {path:'events',component:EventComponent},
    {path:'register.event',component:RegisterEventComponent},
    {path:'password.change',component:PasswordChangeComponent},
    {path:'account.recovery',component:AccountRecoveryComponent},
    {path:'more.info/:id',component:MoreInfoComponent},
    {path:'tickets',component:TicketsComponent}
  ]},
  {path:'create-account',component:CreateAccountComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
