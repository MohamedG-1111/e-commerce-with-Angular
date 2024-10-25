import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { Iproduct } from '../../services/Iproduct';
import{ServicesService} from '../../services/services.service'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  implements OnInit{
  constructor(private router:Router,private products:ServicesService, private route: ActivatedRoute){}

  @Output() producDetails: EventEmitter<Iproduct> = new EventEmitter();
  product = {
    id: ' ',
    name:'',
    price: '',
    quantity:'',
    imge:'',
    color: '',
    country:'',
  };
  @Output() productDetails = new EventEmitter<Iproduct>();
  id: string | null = '';
   p:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.products.updateProduct(this.product,this.id);
       this.p=this.products.showElement(this.id);
    }
  }
  goToProduct() {
   this.producDetails.emit(this.product)
    this.router.navigate(['/products']);
  }
}
