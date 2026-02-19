import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // parent to child
  @Input() product!: IProduct;
  // event that the child component would raise
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product?.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) {
      // return ['strikethrough', bold]; // multiple classes
      return ['strikethrough'];
    } else {
      return [''];
    }
  }

  buyButtonClicked() {
    // raise a new buy event
    this.buy.emit(); // this is how we trigger the event
  }
}

// careful with  EventEmitter sometimes wrong import happens
// https://chatgpt.com/share/699655fa-2e08-8000-80b8-5b68684cc0e7