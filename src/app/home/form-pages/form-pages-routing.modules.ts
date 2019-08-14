import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormPagesComponent } from './form-pages.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CandeactiveGuard } from 'src/app/_core/guards/candeactive.guard';

const routes: Routes = [
    {
        path: "",
        component: FormPagesComponent,
        children: [
            { path: "login-page", component: LoginPageComponent },
            { path: "register-page", component: RegisterPageComponent, canDeactivate: [CandeactiveGuard] },
            { path: "user-info", component: UserInfoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormPagesRoutingModule { }