import createItem from "./services/item.js";
import * as cartService from './services/cart.js'

const myCart = [];

console.log ("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("carrinho fiat uno mille", 39.99, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.displaycart(myCart)

// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

await cartService.removeItem(myCart, 2)

await cartService.displaycart(myCart)


await cartService.calculateTotal(myCart);



