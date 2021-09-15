import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardService } from 'src/app/_services/card.service';

@Component({
  selector: 'app-homestay',
  templateUrl: './homestay.component.html',
  styleUrls: ['./homestay.component.css']
})
export class HomestayComponent implements OnInit {

  homeStayList?: any[];

  constructor(
    private cardService: CardService
  ) {
  }

  ngOnInit(): void {
    //get all homestay data
    this.loadAllHomestayData();
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
      console.log("home-stay");
      console.log(this.homeStayList);
    });
  }
}
