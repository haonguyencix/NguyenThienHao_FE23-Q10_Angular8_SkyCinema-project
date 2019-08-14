import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: HomePageComponent },
      {
        path: "showing-film-details/:id",
        loadChildren: "./showing-film-details/showing-film-details.module#ShowingFilmDetailsModule"
      },
      {
        path: "ticket-box/:id",
        loadChildren: "./ticket-box/ticket-box.module#TicketBoxModule"
      },
      {
        path: "form-pages",
        loadChildren: "./form-pages/form-pages.module#FormPagesModule"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }