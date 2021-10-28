import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
  ) {
    
  }
  isShow = false; 
  navigateUrl(path) {
    this.isShow = !this.isShow;
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    const ScreenWidth = window.screen.availWidth;
    if(ScreenWidth<400){
      $(".mbl-slider").attr("data-scalestart", "200");
      $(".mbl-slider").attr("data-scaleend", "320");
    }
    if(ScreenWidth<600){
      $(".mbl-slider").attr("data-scalestart", "200");
      $(".mbl-slider").attr("data-scaleend", "300");
    }
    if(ScreenWidth<800){
      $(".mbl-slider").attr("data-scalestart", "200");
      $(".mbl-slider").attr("data-scaleend", "300");
    }
  }


  ngAfterViewInit() {
    $("#rev_slider_45_1").show().revolution({
      sliderType: "standard",
      jsFileLocation: "revolution/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: "bullet-bar",
          hide_onleave: false,
          direction: "horizontal",
          h_align: "center",
          v_align: "bottom",
          h_offset: 0,
          v_offset: 50,
          space: 5,
          tmp: ''
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [868, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "0px",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });
  }


}
