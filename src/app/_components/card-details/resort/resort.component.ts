import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/_services/card.service';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent implements OnInit {

  resortStayList?: any[];

  constructor(
    private cardService: CardService
  ) {
  }

  ngOnInit(): void {
    //get all resorts data
    this.loadAllResortData();
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
      console.log("resort");
      console.log(this.resortStayList);
    });
  }
}
