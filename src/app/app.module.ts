import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {MessagesComponent} from './Components/messages/messages.component';
import {MenuComponent} from './Components/menu/menu.component';
import {SlideComponent} from './Components/slide/slide.component';
import {HomeComponent} from './Pages/home/home.component';
import {CateComponent} from './Pages/cate/cate.component';
import {DetailComponent} from './Pages/detail/detail.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './Services/test/in-memory-data.service';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    MenuComponent,
    SlideComponent,
    HomeComponent,
    CateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
