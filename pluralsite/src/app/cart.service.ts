import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  constructor() {}

  add(product: IProduct) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
