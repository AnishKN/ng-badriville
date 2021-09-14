import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  cardArray: any = [{
    banclass: "yellow_color",
    bantext: "Chardham",
    link: "spiritual_tour.html",
    imagesrc: "../../../assets/img/activities/spiritual_tour.jpg",
    loc: "Badrinath",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Spiritual",
    rtext2: "tour",
    clipsrc: "../../../assets/img/clip_art/clip_art_1.png"
  },
  {
    banclass: "green_color",
    bantext: "Relax",
    link: "yoga_camp_at_himalaya.html",
    imagesrc: "../../../assets/img/activities/yoga.jpg",
    loc: "Charanpaduka",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Yoga Camp at",
    rtext2: "Himalaya",
    clipsrc: "../../../assets/img/clip_art/clip_art_2.png"
  },
  {
    banclass: "red_color",
    bantext: "Heritage",
    link: "village_tour_stay.html",
    imagesrc: "../../../assets/img/activities/village_tour.jpg",
    loc: "Dhumak",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Village",
    rtext2: "tour",
    clipsrc: "../../../assets/img/clip_art/clip_art_3.png"
  },
  {
    banclass: "green_color",
    bantext: "Explore",
    link: "nature_camping.html",
    imagesrc: "../../../assets/img/activities/nature_camping.jpg",
    loc: "BadNeelkanth Base Camprinath",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Nature",
    rtext2: "Campaign",
    clipsrc: "../../../assets/img/clip_art/clip_art_4.png"
  },
  {
    banclass: "purple_color",
    bantext: "Expedition",
    link: "trekking.html",
    imagesrc: "../../../assets/img/activities/trekking.jpg",
    loc: "Gorson Bugyal",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Trekking",
    rtext2: "tour",
    clipsrc: "../../../assets/img/clip_art/clip_art_5.png"
  },
  {
    banclass: "orange_color",
    bantext: "Cycling",
    link: "mountain_biking.html",
    imagesrc: "../../../assets/img/activities/mountain_biking.jpg",
    loc: "Tolinala",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Mountain",
    rtext2: "Biking",
    clipsrc: "../../../assets/img/clip_art/clip_art_6.png"
  },
  {
    banclass: "yellow_color",
    bantext: "Road Trip",
    link: "motor_cycle_tour.html",
    imagesrc: "../../../assets/img/activities/motorcycle_tour.jpg",
    loc: "Badrinath",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Motorcycle",
    rtext2: "tour",
    clipsrc: "../../../assets/img/clip_art/clip_art_7.png"
  },
  {
    banclass: "blue_color",
    bantext: "Adventure",
    link: "kiing.html",
    imagesrc: "../../../assets/img/activities/skiing.jpg",
    loc: "Auli",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Skiing",
    rtext2: "",
    clipsrc: "../../../assets/img/clip_art/clip_art_8.png"
  },
  {
    banclass: "green_color",
    bantext: "Discover",
    link: "wildlife_safari.html",
    imagesrc: "../../../assets/img/activities/wildlife.jpg",
    loc: "Khiro Valley",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Wildlife",
    rtext2: "tour",
    clipsrc: "../../../assets/img/clip_art/clip_art_9.png"
  },
  {
    banclass: "orange_color",
    bantext: "Rent",
    link: "equipiment_hire.html",
    imagesrc: "../../../assets/img/activities/equpiment_hire.jpg",
    loc: "Badrinath",
    logosrc: "../../../assets/img/logo/Badriville2.png",
    rtext1: "Equpiment",
    rtext2: "hire",
    clipsrc: "../../../assets/img/clip_art/clip_art_10.png"
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
        dots:true,
        nav: false
      },
      400: {
        items: 1,
        dots:true,
        nav: false
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
}
