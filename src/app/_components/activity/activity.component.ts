import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivityService } from 'src/app/_services/activity.service';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  sliderList?: any[];

  constructor(
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    // get all activity data
    this.loadAllActivity();
  }

  loadAllActivity(): void {
    this.activityService.getFiles().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(sliderList => {
      this.sliderList = sliderList;
      console.log("activity");
      console.log(this.sliderList);
    });
  }
  testarr:any=[{
    banclass:"yellow_color",
    bantext: "Chardham"
  },
  {
    banclass:"yellow_color",
    bantext: "Road Trip"
  },
  {
    banclass:"green_color",
    bantext: "Relax"
  },
  {
    banclass:"green_color",
    bantext: "Explore"
  },
  {
    banclass:"green_color",
    bantext: "Discover"
  },
  {
    banclass:"red_color",
    bantext: "Heritage"
  },
  {
    banclass:"purple_color",
    bantext: "Expedition"
  },
  {
    banclass:"orange_color",
    bantext: "Cycling"
  },
  {
    banclass:"blue_color",
    bantext: "Rent"
  }
]

 

  activity: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      400: {
        items: 1,
        dots: true,
        nav: false
      },
      740: {
        items: 1,
        dots: true,
        nav: false
      },
      940: {
        items: 1,
        dots: true,
        nav: false
      }
    },
    nav: true
  }
}
