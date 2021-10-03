import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-badri-homestay',
  templateUrl: './badri-homestay.component.html',
  styleUrls: ['./badri-homestay.component.css']
})
export class BadriHomestayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#homestay_carousel').sliderPro({
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
  }

}
