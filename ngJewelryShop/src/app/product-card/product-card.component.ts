import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../model/product"
import { PRODUCTS } from "../../necklacedb-data"
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;
  constructor() { }

  ngOnInit() {
  }
  isImageVisible() {
    return this.product && this.product.imgUrl;
  }

}
