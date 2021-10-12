import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/common/header/header.component';
import { FooterComponent } from './_components/common/footer/footer.component';
import { MenuComponent } from './_components/common/menu/menu.component';
import { HomeComponent } from './_components/home/home.component';
import { ResortComponent } from './_components/card-details/resort/resort.component';
import { HomestayComponent } from './_components/card-details/homestay/homestay.component';
import { ActivityComponent } from './_components/activity/activity.component';
import { ProductComponent } from './_components/product/product.component';
import { OtherProductComponent } from './_components/other-product/other-product.component';
import { ReviewComponent } from './_components/review/review.component';
import { AddressComponent } from './_components/address/address.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './_components/slider/slider.component';
import { ToastrModule } from 'ngx-toastr';
import { ComingSoonComponent } from './_components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ResortComponent,
    HomestayComponent,
    ActivityComponent,
    ProductComponent,
    OtherProductComponent,
    ReviewComponent,
    AddressComponent,
    SliderComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    CarouselModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
