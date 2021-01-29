import { Request } from '../model/request.class';
import { Product } from '../model/product.class';

export class LineItem {

    id: number;
    quantity: number;
    request: Request;
    product: Product;

    constructor(id: number = 0, quantity: number = 0, request: Request = new Request(), product: Product = new Product()) {

        this.id = id;
        this.quantity = quantity;
        this.request = request;
        this.product = product;
    }

}