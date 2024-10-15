import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products";

  public selectedProduct: number = 1;

  private _products: Product[] = [];

  //hola

  public get products(): Product[]{
    return this._products;
  }

  public fetchProducts(){
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response)=>{
        // console.log(response);
        this._products = response;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

  public getSelectedProduct(): Product {
    const product = this._products.find(product => product.id === this.selectedProduct);
    if (!product) {
      throw new Error(`Product with id ${this.selectedProduct} not found`);
    }
    return product;
  }

  public setSelectedProduct(id: number) {
    this.selectedProduct = id;
  } 
}
