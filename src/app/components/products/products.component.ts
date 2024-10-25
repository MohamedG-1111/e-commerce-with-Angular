import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Iproduct } from '../services/Iproduct';
import { FormComponent } from './form/form.component';
import {CommonModule} from'@angular/common'
import {Router} from '@angular/router'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products: Iproduct[] = [];
  showForm: boolean = false;
  showContent: boolean = true;

  constructor(private route: Router,private productsServices: ServicesService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.Products = this.productsServices.getProducts();
  }

  addProductToServices(product: Iproduct) {
    if (product) {
      this.productsServices.addProduct(product);
      this.getProducts();
    }
  }

  deleteProduct(productId: string) {
    this.Products = this.Products.filter(product => product.id !== productId);
  }

  showFormComponent() {
    this.showForm = true;
    this.showContent = false;
  }
  handleProductCreated(product: Iproduct) {
    this.addProductToServices(product);
    this.showForm = false;
    this.showContent = true;
    return product;
  }
  goToProductdetails(id:string){
    this.route.navigate(['./details',id]);
  }
  goToEditProduct(id: string) {
      this.route.navigate(['/edit', id]);
    }
  }
