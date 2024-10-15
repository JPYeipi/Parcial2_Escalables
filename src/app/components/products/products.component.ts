import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsService } from '../../services/products.service';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, NgFor, NgIf, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor() {
    this.productsService.fetchProducts();
  }

  public currentPage = "products";

  public get products(): Product[]{
    return this.productsService.products;
  }

  private productsService = inject(ProductsService);

  public selectProduct(id: number) {
    this.productsService.setSelectedProduct(id);
  } 
}
