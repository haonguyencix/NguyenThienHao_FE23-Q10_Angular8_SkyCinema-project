import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPagesComponent } from './form-pages.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormPagesRoutingModule } from './form-pages-routing.modules';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/material/material.modules';
import { UserInfoComponent } from './user-info/user-info.component';
import { InfoTabComponent } from './user-info/info-tab/info-tab.component';
import { ChangePassTabComponent } from './user-info/change-pass-tab/change-pass-tab.component';
import { HistoryTabComponent } from './user-info/history-tab/history-tab.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [FormPagesComponent, LoginPageComponent, RegisterPageComponent, UserInfoComponent, InfoTabComponent, ChangePassTabComponent, HistoryTabComponent],
  imports: [
    CommonModule,
    FormPagesRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class FormPagesModule { }
