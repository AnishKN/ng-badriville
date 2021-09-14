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

  imageArr:any=[{
    src:"../../../assets/img/slides/home_slider_1.jpg",
    btn:"GET STARTED",
    heading1:"Exploring",
    heading2:"New Paths",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-66"
  },
  {
    src:"../../../assets/img/slides/home_slider_2.jpg",
    btn:"GET STARTED",
    heading1:"Experience with",
    heading2:"Citytours",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-67"
  },
  {
    src:"../../../assets/img/slides/home_slider_3.jpg",
    btn:"GET STARTED",
    heading1:"Making your",
    heading2:"Ideas possible.",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-68"
  },
  {
    src:"../../../assets/img/slides/home_slider_4.jpg",
    btn:"GET STARTED",
    heading1:"Exploring",
    heading2:"New Paths",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-69"
  },
  {
    src:"../../../assets/img/slides/home_slider_5.jpg",
    btn:"GET STARTED",
    heading1:"Experience with",
    heading2:"Citytours",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-70"
  },
  {
    src:"../../../assets/img/slides/home_slider_6.jpg",
    btn:"GET STARTED",
    heading1:"Making your",
    heading2:"Ideas possible.",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-71"
  },
  {
    src:"../../../assets/img/slides/home_slider_7.jpg",
    btn:"GET STARTED",
    heading1:"Exploring",
    heading2:"New Paths",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-72"
  },
  {
    src:"../../../assets/img/slides/home_slider_8.jpg",
    btn:"GET STARTED",
    heading1:"Experience with",
    heading2:"Citytours",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-73"
  },
  {
    src:"../../../assets/img/slides/home_slider_9.jpg",
    btn:"GET STARTED",
    heading1:"Making your",
    heading2:"Ideas possible.",
    Desc:"Expolore top rated tours, hotels and restaurants around the world!",
    datai:"rs-74"
  }
]

}
