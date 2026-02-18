import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() productDetails!: IProduct;
  cart: IProduct[] = [];

  constructor() {}

  getImageUrl(productDetails: IProduct) {
    return '/assets/images/robot-parts/' + productDetails?.imageName;
  }

  addToCart(productDetails: IProduct) {
    this.cart.push(productDetails);
    console.log(`product ${productDetails.name} added to cart`);
  }

  getDiscountedClasses(productDetails: IProduct) {
    if (productDetails.discount > 0) {
      // return ['strikethrough', bold]; // multiple classes
      return ['strikethrough'];
    } else {
      return [];
    }
  }
}
