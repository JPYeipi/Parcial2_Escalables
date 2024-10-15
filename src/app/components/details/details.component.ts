import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ NgIf, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private productsService = inject(ProductsService);
  public product : Product | undefined;

  constructor() {
    this.product = this.productsService.getSelectedProduct()
  }
}
