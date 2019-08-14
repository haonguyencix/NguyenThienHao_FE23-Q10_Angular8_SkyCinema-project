import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterPageComponent } from 'src/app/home/form-pages/register-page/register-page.component';

export interface CanDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<RegisterPageComponent> {
  canDeactivate(component){
    return component.canDeactivate() || window.confirm("DO YOU WANT TO LEAVE WITHOUT COMPLETING THIS FORM ?");
  }
}
