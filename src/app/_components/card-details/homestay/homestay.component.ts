import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/_services/card.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-homestay',
  templateUrl: './homestay.component.html',
  styleUrls: ['./homestay.component.css']
})
export class HomestayComponent implements OnInit {

  homeStayList?: any[];
  classHide: any;
  count: any;
  slides: any;
  index = 0;

  constructor(
    private cardService: CardService,
    private elementRef: ElementRef,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    //get all homestay data
    this.loadAllHomestayData();
  } 

  ngAfterViewInit() {
    const obs$ = interval(5000)
    obs$.subscribe((d) => {
      //img transition
      this.slides = this.elementRef.nativeElement.querySelector('.homestay-slides')
        .addEventListener('load',
          this.slides = document.querySelectorAll(".homestay-slides"),
          this.classHide = "homestay-slides-hidden",
          this.count = this.slides.length,
          this.nextSlide()
        );
    })
  }
  nextSlide() {
    this.slides[(this.index++) % this.count].classList.add(this.classHide);
    this.slides[this.index % this.count].classList.remove(this.classHide);
  }

  loadAllHomestayData(): void {
    this.cardService.getHomestayData().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(res => {
      this.homeStayList = res;
    });
  }

  homestay() {
    this.router.navigate(['homestay']);
  }

  contactUs() {
    this.router.navigate(['contact-us']);
  }
}
