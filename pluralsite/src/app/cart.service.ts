import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  constructor(private http: HttpClient) {}

  add(product: IProduct) {
    this.cart.push(product);

    // this javascript object this.cart is auto converted to JSON
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log(`product ${product.name} added to cart`);
    });
  }
}
