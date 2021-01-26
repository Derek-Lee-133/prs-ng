import { Request } from '../model/request.class';
import { Product } from '../model/product.class';

export class lineItem {

    id: number;
    quantity: number;
    requestId: Request;
    productId: Product;

    constructor(id: number = 0, quantity: number = 0, requestId: Request = new Request(), productId: Product = new Product()) {

        this.id = id;
        this.quantity = quantity;
        this.requestId = requestId;
        this.productId = productId;
    }

}