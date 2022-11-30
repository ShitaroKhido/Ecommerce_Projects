// SELLER SIDE FUNCTION-----------------------------------
const addToCart = (event, cartList, container) => {
  // Add ID of the item to cart array list:
  if (event.target.textContent === "BUY") {
    cartList.push(event.target.parentElement.parentElement.id);
    renderCartBox(cartList, item, container);
    console.log(cartList);
  }
};

const removeFromCart = (event, cartList, container) => {
  // Remove ID of the item to cart array list:
  if (event.target.textContent === "Remove") {
    console.log(event.target.parentElement.id);
    console.log(cartList);
    cartList.pop(event.target.parentElement.id);
    renderCartBox(cartList, item, container);
  }
};

const renderCartBox = (cartList, itemList, container) => {
  if(cartList.length === 0){
    container.innerHTML = "<h2>Empty</h2>";
  } else {
    container.innerHTML = "";
    itemList.forEach((item) => {
      cartList.forEach((id) => {
        if (id === item.id) {
          const cartItem = document.createElement("div");
          const img = document.createElement("img");
          const name = document.createElement("div");
          const price = document.createElement("div");
          const removeButton = document.createElement("button");

          cartItem.classList.add("item");
          cartItem.id = id;
          name.classList.add("name");
          price.classList.add("price");
          removeButton.classList.add("btn", "btn-danger");
          removeButton.textContent = "Remove";
          img.src = item.img;
          name.textContent = item.name;
          price.textContent = item.price;
          console.log(container.children);
          cartItem.append(img, name, price, removeButton);
          container.appendChild(cartItem);
        }
      });
    });
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("btn", "btn-primary");
    checkoutButton.id = "checkout";
    checkoutButton.textContent = "CHECKOUT"
    checkoutButton.style.margin = "2rem"
    container.appendChild(checkoutButton);
  }
};

// MAIN CODE-----------------------------------------------
const cart = [];
const cartContainer = document.querySelector("#cart-box .cart-container");
const cartPopup = document.querySelector("#cart-box");

// EVENT LISTENER
document.body.addEventListener("click", (event) => {
  addToCart(event, cart, cartContainer);
  if (event.target.textContent === "shopping_cart") {
      // Toggle the display values
      displayToggle(cartPopup, "block")
      // Render cart box to user interface
      renderCartBox(cart, item, cartContainer)
  }
});

cartContainer.addEventListener("click", (event) => {
  removeFromCart(event, cart, cartContainer);
});
