import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WiddingsComponent } from './widdings/widdings.component';
import { ThaiWiddingsComponent } from './widdings/thai-widdings/thai-widdings.component';
import { WesternWiddingsComponent } from './widdings/western-widdings/western-widdings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WiddingsComponent,
    ThaiWiddingsComponent,
    WesternWiddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
