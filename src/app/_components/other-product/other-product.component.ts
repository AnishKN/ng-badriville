import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-other-product',
  templateUrl: './other-product.component.html',
  styleUrls: ['./other-product.component.css']
})
export class OtherProductComponent implements OnInit {

  spacilaProductList?: any[];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.loadSpecialProduct();
  }

  loadSpecialProduct(): void {
    this.productService.getSpecialProduct().snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(res => {
      this.spacilaProductList = res;
      console.log(this.spacilaProductList);
    });
  }

}
