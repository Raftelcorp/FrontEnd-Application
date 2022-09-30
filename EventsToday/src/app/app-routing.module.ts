import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterEventComponent } from './components/register.event/register.event.component';
import { PublishedEventComponent } from './components/published-event/published-event.component';

const routes: Routes = [
{path:'register.event',component:RegisterEventComponent},
 {path:'published.event',component:PublishedEventComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
