import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivityService } from 'src/app/_services/activity.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activityList?: any[];

  constructor(
    private activityService: ActivityService,
    private router: Router,
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
    ).subscribe(activityList => {
      this.activityList = activityList;
    });
  }


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

  navigateUrl(path) {
    this.router.navigate([path]);
  }

}
