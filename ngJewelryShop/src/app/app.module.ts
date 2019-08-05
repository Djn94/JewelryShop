import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NecklaceDivComponent } from './necklace-div/necklace-div.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductBoxComponent } from './product-box/product-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    AboutMeComponent,
    NavBarComponent,
    ProductBoxComponent,
  ],
  imports: [
    BrowserModule,

  ],
  exports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
