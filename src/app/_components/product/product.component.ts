import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList?: any[];
  firstList?: any [];
  secondList?: any [];
  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct(): void {
    this.productService.getProduct().snapshotChanges().pipe(
      map(changes =>
        // store the key   
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(res => {
      this.productList = res;
    });
  }

  products: OwlOptions = {
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
        dots: true,
        nav: false
      },
      400: {
        items: 1,
        dots: true,
        nav: false
      },
      740: {
        items: 1,
        dots: true,
        nav: false
      },
      940: {
        items: 3,
        dots: false,
        nav: true
      }
    },
    nav: true
  }
}
