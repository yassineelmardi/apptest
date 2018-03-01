import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import {AboutService} from '../services/aboutservice';
import {Route, RouterModule, Routes} from "@angular/router";

const routes :Routes=[
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactsComponent},
  {path:'', redirectTo:'/about',pathMatch:'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
