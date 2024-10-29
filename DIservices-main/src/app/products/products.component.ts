import { Component } from '@angular/core';
import { Product } from '../product';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private logger: LoggerService){}

products: Product[]=[
  {
    name: 'TV',
    type: 'Tech',
    price: 1500
  },{
    name: 'Computer',
    type: 'Tech',
    price: 4600
  },
  {
    name: 'Table',
    type: 'Furniture',
    price: 200
  },
  {
    name: 'Shampoo',
    type: 'Health',
    price: 30
  },
]


Display(){
  this.logger.Log(this.products)
}

}
