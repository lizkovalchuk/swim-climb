import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoolComponent } from './pool/pool.component';
import { ClimbComponent } from './climb/climb.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ClimbDetailsComponent } from './climb-details/climb-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PoolComponent,
    ClimbComponent,
    ClimbDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
