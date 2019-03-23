import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
  { path: 'project', component: ProjectComponent, pathMatch: 'full'},
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
