import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadProducts = await fetch('products.json')
    const products = await loadProducts.json()


    // if cart data is in database ,you have to use async await
    const storedCart = getShoppingCart()
    // console.log(storedCart);
    let saveCart=[]
    for (const id in storedCart) {
        // console.log(id);
        const addProduct = products.find(pd => pd.id === id)
        // console.log(addProduct);
        if (addProduct) {
const quantity=storedCart[id]
// console.log(quantity);
addProduct.quantity=quantity
saveCart.push(addProduct)
        }

    }




    // console.log(products);
    // return products
    return saveCart

    // if you need to send two thing
    //1. return [products,saveCart]
    // 2.another option
    // return {products,saveCart}
    // return {products,cart: saveCart}
}
export default cartProductsLoader;  