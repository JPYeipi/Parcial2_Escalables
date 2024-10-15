import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "details", component: DetailsComponent},
    {path: "", redirectTo: "home", pathMatch: 'full'},
];
