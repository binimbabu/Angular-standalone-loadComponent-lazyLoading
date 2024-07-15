import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NofoundComponent } from './nofound/nofound.component';

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component').then(component => component.LoginComponent) },
  { path: 'register',loadComponent: () => import('./register/register.component').then(component => component.RegisterComponent) },
  { path: '**', loadComponent: () => import('./nofound/nofound.component').then(component => component.NofoundComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
