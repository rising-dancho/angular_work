import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})

// interface is just a datatype but for object literals
export class CatalogComponent {
  // the name is plural: "products" and the interface is attached with [] to handle multiple object literals
  products: any;
  // products: any;

  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
  ) {
    // hardcoded data
    // this.products = [
    //   {
    //     id: 1,
    //     description:
    //       'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
    //     name: 'Large Cyclops',
    //     imageName: 'head-big-eye.png',
    //     category: 'Heads',
    //     price: 1220.5,
    //     discount: 0.2,
    //   },
    // ];
    // this.products = [];
  }

  // grab the server data and equate that to the products property in the constructor
  // ngOnInit() {
  //   // you need to subscribe to an Observable AFTER calling it!
  //   this.productSvc.getProducts().subscribe((products) => {
  //     this.products = products;
  //   });
  // }

  ngOnInit() {
    this.productSvc.getProducts().subscribe({
      next: (products) => {
        console.log('Products received:', products);
        this.products = products;
      },
      error: (err) => {
        console.error('HTTP error:', err);
      },
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter,
        );
  }
}
