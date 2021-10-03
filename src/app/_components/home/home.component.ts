import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HomeSliderService } from 'src/app/_services/home_slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderList?: any[];

  constructor(
    private homeSliderService: HomeSliderService
  ) {
  }

  ngOnInit(): void {
    this.loadAllSliderImage();
  }

  loadAllSliderImage(): void {
    this.homeSliderService.getFiles().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(sliderList => {
      this.sliderList = sliderList;
    });
  }
  List:any=[{
    image:"../../../assets/img/slides/home_slider_1.jpg"
  }]
}
