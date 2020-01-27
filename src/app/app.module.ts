import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  LoginComponent
} from './components/login/login.component';
import {
  FooterComponent
} from './components/footer/footer.component';
import {
  HeaderComponent
} from './components/header/header.component';
import {
  SidenavComponent
} from './components/sidenav/sidenav.component';
import {
  TemplateComponent
} from './components/template/template.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import {
  CongratsComponent
} from './components/congrats/congrats.component';

import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  RegistrationComponent
} from './components/registration/registration.component';

const appRoutes: Routes = [{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    TemplateComponent,
    CongratsComponent,
    RegistrationComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
