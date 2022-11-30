// SELLER SIDE FUNCTION-----------------------------------

const addToCart = (event, cartList) => {
    // Add ID of the item to cart array list:
    const itemID = event.target.parentElement.parentElement.id;
    cartList.push(itemID);
}

const removeFromCart = (event, cartList) => {
    // Remove ID of the item to cart array list:
    const itemID = event.target.parentElement.parentElement.id;
    cartList.pop(itemID);
}

// MAIN CODE-----------------------------------------------

// document.addEventListener("click", addToCart);
// document.addEventListener("click", ()=>console.log("test"))
document.addEventListener("click", addToCart)