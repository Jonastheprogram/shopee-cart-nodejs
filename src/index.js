import createItem from "./services/item.js";
import * as cartService from './services/cart.js'

const myCart = [];

console.log ("Welcome to the your Shopee Cart!");

//adição de itens ao carrinho
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("carrinho fiat uno mille", 39.99, 3);

//adição de itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//mostra itens no carrinho
await cartService.displaycart(myCart)

// deleção de itens do carrinho
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);

// remoção de quantidade de itens do carrinho
// await cartService.removeItem(myCart, 1)

await cartService.displaycart(myCart)

// calculo total de itens do carrinho
await cartService.calculateTotal(myCart);



