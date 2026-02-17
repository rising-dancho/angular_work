import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})

// interface is just a datatype but for objects
export class CatalogComponent {
  product: IProduct;
  constructor() {
    // hardcoded data
    this.product = {
      id: 1,
      description:
        'A friendly robot head with two eyes and a smile -- great for domestic use.',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    };
  }
}
