import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowingFilmDetailsComponent } from './showing-film-details.component';

const routes: Routes = [
    { path: "", component: ShowingFilmDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowingFilmDetailsRoutingModule { }