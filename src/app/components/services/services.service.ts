import { Injectable} from '@angular/core';
import { Iproduct } from './Iproduct';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService  {

  constructor() { }
   Products: Iproduct[] = [
    {
      imge: 'tv.png',
      name: 'TV',
      price: '200',
      quantity: '100',
      color: 'black',
      country: 'China',
      id:''
    },
    {
      imge: 'img6.png',
      name: 'Phone',
      price: '300',
      quantity: '100',
      color: 'grey',
      country: 'China'
      ,id:''
    },
    {
      imge: 'product1.png',
      name: 'Chose',
      price: '50',
      quantity: '500',
      color: 'black',
      country: 'Egypt'
        ,id:''
    },
    {
      imge: 'product2.png',
      name: 'Jacket',
      price: '200',
      quantity: '1000',
      color: 'black',
      country: 'America'
        ,id:''
    },
    {
      imge: 'p1-removebg-preview.png',
      name: 'Dettol',
      price: '10',
      quantity: '100',
      color: 'green',
      country: 'Egypt'
        ,id:''
    },
    {
      imge: 'p2-removebg-preview.png',
      name: 'Madesa Modern',
      price: '200',
      quantity: '300',
      color: 'gray',
      country: 'Germany'
        ,id:''
    },
    {
    imge: 'cap-removebg-preview.png',
    name: 'Cap Hat',
    price: '5',
    quantity: '300',
    color: 'black',
    country: 'Egypt'
      ,id:''
  }
  ];
 addProduct(Product :Iproduct){
  this.Products.push(Product);
 }
 showElement(id:string){
  return this.Products.find((ele,index)=>{
    return ele.id===id;
  })
 }
  getProducts() {
    return this.Products.map((product, index) => {
      product.id = (index + 1).toString();
      return product;
    });
  }

  private userNameSubject = new BehaviorSubject<string>('');
  setUserName(userName: string) {
    this.userNameSubject.next(userName);
  }
  getUsernName():Observable<string>{
    return this.userNameSubject.asObservable();
  }

  updateProduct(updatedProduct: Iproduct,id:string) {
    const index = this.Products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.Products[index] = updatedProduct;
    }
  }
}
