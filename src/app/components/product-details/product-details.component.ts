import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ServicesService} from '../services/services.service'
import { Iproduct } from '../services/Iproduct';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,private Products:ServicesService) { }
  product: Iproduct|undefined;
   id:any='';
  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.getElement();
    }
}
getElement(){
  this.product=this.Products.showElement(this.id);
  console.log(this.product)
}

}
