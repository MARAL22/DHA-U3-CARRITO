import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {

    this.products = [
      {
        name: 'EairDots 2',
        photo: 'https://picsum.photos/300/300',
        description: 'Audifonos Xiaomi',
        price: 400,
        cant: 1
      },
      {
        name: 'JBL',
        photo: 'https://picsum.photos/300/300',
        description: 'Audifonos in ear',
        price: 900,
        cant: 1
      },
      {
        name: 'Sony',
        photo: 'https://picsum.photos/300/300',
        description: 'Audifonos Sony diadema',
        price: 1300,
        cant: 1
      },
    ];
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
