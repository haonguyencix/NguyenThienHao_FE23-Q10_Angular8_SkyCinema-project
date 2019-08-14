import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketBoxComponent } from './ticket-box.component';

const routes: Routes = [
  {
    path: "",
    component: TicketBoxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBoxRoutingModule { }