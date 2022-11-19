import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { RegisterEventComponent } from './pages/register.event/register.event.component';
import { PublishedEventComponent } from './pages/published-event/published-event.component';
import { PasswordChangeComponent } from './pages/password-change/password-change.component';
import { AccountRecoveryComponent } from './pages/account-recovery/account-recovery.component';
import { EventComponent } from './pages/events/event.component';
import { LoginComponent } from './pages/login/login.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { MoreInfoComponent } from 'src/app/pages/more-info/more-info.component';
import { LoginAuthComponent } from './auth/login-auth/login-auth.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { EventListComponent } from './admin/event-list/event-list.component';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};



const routes: Routes = [
  {path:'',component:LoginAuthComponent},
 {path:'login',component:LoginAuthComponent},
  {path:'client.menu/:id',component:ClienteMenuComponent,
  children:[
    {path:'', redirectTo:'events',pathMatch:'full'},
    {path:'events',component:EventComponent },
    {path:'events/more.info/:eventId',component:MoreInfoComponent  },
    {path:'register.event',component:RegisterEventComponent},
    {path:'password.change',component:PasswordChangeComponent},
    {path:'account.recovery',component:AccountRecoveryComponent},
    { path: 'customer-list', component: CustomerListComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
    { path: 'event-list', component: EventListComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  
    {path:'tickets',component:TicketsComponent}
  ]},
  {path:'create-account',component:CreateAccountComponent},
 

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
