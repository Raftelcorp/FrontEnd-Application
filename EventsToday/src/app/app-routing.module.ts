import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishedEventComponent } from './components/published-event/published-event.component';

const routes: Routes = [
  {path:'published.event',component:PublishedEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
