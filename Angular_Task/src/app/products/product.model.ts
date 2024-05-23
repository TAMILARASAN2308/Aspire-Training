export class product{
    productName:String;
    productId:number;
    cost:number;
    category:String;

    constructor(productName:String, productId:number, cost:number, category:String){
        this.productId=productId;
        this.productName=productName;
        this.cost=cost;
        this.category=category;
    }
}