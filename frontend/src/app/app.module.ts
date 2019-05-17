import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule, Optional, SkipSelf} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {RouterModule} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './modules/layout/home/home.component';
import {ProjectComponent} from './modules/layout/project/project.component';
import {LoginComponent} from './modules/layout/entry/login/login.component';
import {RegisterComponent} from './modules/layout/entry/register/register.component';
import {NProjectComponent} from './modules/action/modal/buttons-new/project/n-project.component';
import {NTaskComponent} from './modules/action/modal/buttons-new/task/n-task.component';
import {NUserComponent} from './modules/action/modal/buttons-new/user/n-user.component';
import {ModalModule} from 'ngx-bootstrap';
import {ButNewComponent} from './modules/action/modal/buttons-new/but-new.component';
import {ProjectModule} from './modules/project/project.module';
import {ButNewModule} from './modules/action/modal/buttons-new/but-new.module';
import { TableComponent } from './modules/home/components/table/table.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiInterceptor} from "./httpinterceptor/api.interceptor";
import {JwtInt} from "./httpinterceptor/jwt.interceptor";
import {NotFoundComponent} from "./modules/layout/404-not-found/not-found.component";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {IconUserComponent} from "./modules/action/icon-user/icon-user.component";
import {CabinetComponent} from "./modules/layout/cabinet/cabinet.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    LoginComponent,
    RegisterComponent,
    ButNewComponent,
    TableComponent,
    NotFoundComponent,
    IconUserComponent,
    CabinetComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ProjectModule,
    ButNewModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInt,
      multi: true
    }
  ],
  entryComponents: [
    NProjectComponent,
    NUserComponent,
    NTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
