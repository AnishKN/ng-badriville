import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from '../_components/pages/about-us/about-us.component';
import { ContactUsComponent } from '../_components/pages/contact-us/contact-us.component';
import { BadriHomestayComponent } from '../_components/pages/hotels/badri-homestay/badri-homestay.component';
import { BadriResortsComponent } from '../_components/pages/hotels/badri-resorts/badri-resorts.component';
import { PagesComponent } from '../_components/pages/pages.component';
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
import { HomeComponent } from '../_components/home/home.component';

const routes: Routes = [ 
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'resorts',
        component: BadriResortsComponent
    },
    {
        path: 'homestay', 
        component: BadriHomestayComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'equipiment-hire',
        component: EquipmentHireComponent
    },
    {
        path: 'motor-cycle-tour',
        component: MotorcycleTourComponent
    },
    {
        path: 'mountain-biking',
        component: MountainBikingComponent
    },
    {
        path: 'nature-camping',
        component: NatureCampComponent
    },
    {
        path: 'skiing',
        component: SkiingComponent
    },
    {
        path: 'spiritual-tour',
        component: SpiritualTourComponent
    },
    {
        path: 'trekking',
        component: TrekkingComponent
    },
    {
        path: 'village-tour',
        component: VillageTourComponent
    },
    {
        path: 'wildlife-safari',
        component: WildlifeSafariComponent
    },
    {
        path: 'yoga-camp-at-himlaya',
        component: YogaCampComponent
    }
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }