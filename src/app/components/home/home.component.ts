import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgFor, NgIf, NgClass } from '@angular/common';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.fetchProducts();
  }

  public currentPage = "products";

  public get products(): Product[]{
    return this.productsService.products;
  }



}
