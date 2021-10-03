import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AboutUsComponent } from '../_components/pages/about-us/about-us.component';
import { ContactUsComponent } from '../_components/pages/contact-us/contact-us.component';
import { BadriHomestayComponent } from '../_components/pages/hotels/badri-homestay/badri-homestay.component';
import { BadriResortsComponent } from '../_components/pages/hotels/badri-resorts/badri-resorts.component';
import { EquipmentHireComponent } from '../_components/pages/services/equipment-hire/equipment-hire.component';
import { MotorcycleTourComponent } from '../_components/pages/services/motorcycle-tour/motorcycle-tour.component';
import { MountainBikingComponent } from '../_components/pages/services/mountain-biking/mountain-biking.component';
import { NatureCampComponent } from '../_components/pages/services/nature-camp/nature-camp.component';
import { SkiingComponent } from '../_components/pages/services/skiing/skiing.component';
import { SpiritualTourComponent } from '../_components/pages/services/spiritual-tour/spiritual-tour.component';
import { TrekkingComponent } from '../_components/pages/services/trekking/trekking.component';
import { VillageTourComponent } from '../_components/pages/services/village-tour/village-tour.component';
import { WildlifeSafariComponent } from '../_components/pages/services/wildlife-safari/wildlife-safari.component';
import { YogaCampComponent } from '../_components/pages/services/yoga-camp/yoga-camp.component';
import { PagesComponent } from '../_components/pages/pages.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        SpiritualTourComponent,
        YogaCampComponent,
        VillageTourComponent,
        NatureCampComponent,
        TrekkingComponent,
        MountainBikingComponent,
        MotorcycleTourComponent,
        SkiingComponent,
        WildlifeSafariComponent,
        EquipmentHireComponent,
        AboutUsComponent,
        ContactUsComponent,
        BadriResortsComponent,
        BadriHomestayComponent,
        PagesComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        SpiritualTourComponent,
        YogaCampComponent,
        VillageTourComponent,
        NatureCampComponent,
        TrekkingComponent,
        MountainBikingComponent,
        MotorcycleTourComponent,
        SkiingComponent,
        WildlifeSafariComponent,
        EquipmentHireComponent,
        AboutUsComponent,
        ContactUsComponent,
        BadriResortsComponent,
        BadriHomestayComponent,
        PagesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule {

}