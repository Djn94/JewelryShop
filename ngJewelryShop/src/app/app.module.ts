import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "../app/header/header.component";
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProductBoxComponent } from './product-box/product-box.component';

const appRoutes: Routes = [
  // { path: 'necklaces', component: BuyNecklaceComponent, data: {?} },
  // { path: 'bracelets', component: BuyBraceletComponent },
  // { path: 'earrings', component: BuyEarringComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    AboutMeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })

  ],
  exports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
