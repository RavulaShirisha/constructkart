function addToCart(item, price){
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 cart.push({item: iterm, price: price});
 localStorage.setItem("cart", JSON.stringify(cart));
 alert(item + " added to cart");
}
