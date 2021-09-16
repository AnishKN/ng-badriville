import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReviewService } from 'src/app/_services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewList?: any[];

  constructor(
    private reviewService: ReviewService
  ) {
  }

  ngOnInit(): void {
    this.loadSpecialProduct();
  }

  loadSpecialProduct(): void {
    this.reviewService.getReview().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(res => {
      this.reviewList = res;
    });
  }
  


}
