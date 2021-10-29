import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/_services/card.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit, AfterViewInit {

  resortStayList?: any[];
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
    //get all resorts data
    this.loadAllResortData();
  }

  ngAfterViewInit() {
    const obs$ = interval(3000)
    obs$.subscribe((d) => {
      //img transition
      this.slides = this.elementRef.nativeElement.querySelector('.resort-slides')
        .addEventListener('load',
          this.slides = document.querySelectorAll(".resort-slides"),
          this.classHide = "resort-slides-hidden",
          this.count = this.slides.length,
          this.nextSlide()
        );
    })
  }

  nextSlide() {
    this.slides[(this.index++) % this.count].classList.add(this.classHide);
    this.slides[this.index % this.count].classList.remove(this.classHide);
  }

  loadAllResortData(): void {
    this.cardService.getResortsData().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(res => {
      this.resortStayList = res;
    });
  }


  resorts() {
    this.router.navigate(['resorts']);
  }

  contactUs() {
    this.router.navigate(['contact-us']);
  }


}
