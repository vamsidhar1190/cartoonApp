import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { CartoondetailComponent } from './cartoondetail/cartoondetail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';

const routes:Routes=[
  {
    path:'',component:HeaderComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'cartoons',component:CartoonsComponent,
    
  },
  {
    path:'cartoons/:id',component:CartoondetailComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartoonsComponent,
    CartoondetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    AutocompleteLibModule,
    NgSelectModule
   
    
    
    
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
