import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './modules/layout/home/home.component';
import {ProjectComponent} from './modules/layout/project/project.component';
import {LoginComponent} from './modules/layout/entry/login/login.component';
import {RegisterComponent} from './modules/layout/entry/register/register.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'project/:id', component: ProjectComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
