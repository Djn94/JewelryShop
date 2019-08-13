import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../model/product"
import { Store } from '@ngrx/store'
import { PRODUCTS } from "../../necklacedb-data"
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  product: Product;
  constructor(private store: Store<{ items: []; cart: [] }>) { }
  @Input() product: Product;
  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }
  //dispatches action to add the item
  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() {
  }
  isImageVisible() {
    return this.product && this.product.imgUrl;
  }

}
