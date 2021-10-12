import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShow = false;
  isHotelShow = false;
  isServiceShow = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  socialMediaRoute(path) {
    window.location.href = path;
  }

  showMobileMenu() {
    this.isShow = !this.isShow;

  }
  showHotels() {
    this.isHotelShow = !this.isHotelShow;
  }

  showServices() {
    this.isServiceShow = !this.isServiceShow;
  }

  navigateUrl(path) {
    this.isShow = !this.isShow;
    this.router.navigate([path]);
  }
  tofooter(){
    document.getElementById("footerID").scrollIntoView({behavior:"smooth"});
  }
  toactivities(){
    document.getElementById("activityID").scrollIntoView({behavior:"smooth"});
  }
}
