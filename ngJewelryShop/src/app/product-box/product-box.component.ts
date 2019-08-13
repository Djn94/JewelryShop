import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-card/product-card.component';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';


@Component({
  selector: 'product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
  }
  @Input() necklaces: Product[] = [];
  items: Product[] = [];
  ngOnInit() {
    this.store.dispatch(new GetItems());

  }

}
