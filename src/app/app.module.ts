import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { CartoondetailComponent } from './cartoondetail/cartoondetail.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {
    path:'',component:HeaderComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'cartoons',component:CartoonsComponent
  },
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartoonsComponent,
    CartoondetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
