import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './ticket_demo/_components/alert/alert.component';
import { LayoutComponent } from './ticket_demo/account/layout/layout.component';
import { LoginComponent } from './ticket_demo/account/login/login.component';
import { RegisterComponent } from './ticket_demo/account/register/register.component';
import { AddEditComponent } from './ticket_demo/users/add-edit/add-edit.component';
import { ListComponent } from './ticket_demo/users/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AlertComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AddEditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
