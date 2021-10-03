import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-badri-resorts',
  templateUrl: './badri-resorts.component.html',
  styleUrls: ['./badri-resorts.component.css']
})
export class BadriResortsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#resort_carousel').sliderPro({
      width: 960,
      height: 500,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: false,
      smallSize: 500,
      startSlide: 0,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });
    $('.carousel-resort').owlCarousel({
      loop: false,
      margin: 5,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 4,
          nav: false
        }
      }
    });
  }
}
