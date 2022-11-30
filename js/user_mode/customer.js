// SELLER SIDE FUNCTION-----------------------------------
const addToCart = (event, cartList, container) => {
  // Add ID of the item to cart array list:
  if (event.target.textContent === "BUY") {
    cartList.push(event.target.parentElement.parentElement.id);
    renderCartBox(cartList, item, container);
  }
};

const removeFromCart = (event, cartList, container) => {
  // Remove ID of the item to cart array list:
  if (event.target.textContent === "Remove") {
    cartList.pop(event.target.parentElement.id);
    renderCartBox(cartList, item, container);
  }
};

const renderCartBox = (cartList, itemList, container) => {
  // FUNCTION: DISPLAY CART BOX TO USER.
  // Check if cart is empty:
  if (cartList.length === 0) {
    container.innerHTML = "<h2>Empty</h2>";
  } else {
    // Clear container:
    container.innerHTML = "";
    // Loop on item list and creating cart item with matches ID:
    itemList.forEach((item) => {
      cartList.forEach((id) => {
        // Check if the ID is matched:
        if (id === item.id) {
          // Create elements:
          const cartItem = document.createElement("div");
          const img = document.createElement("img");
          const name = document.createElement("div");
          const price = document.createElement("div");
          const removeButton = document.createElement("button");
          // Assigning class to needed element:
          cartItem.classList.add("item");
          cartItem.id = id;
          name.classList.add("name");
          price.classList.add("price");
          removeButton.classList.add("btn", "btn-danger");
          // Set content for needed element:
          removeButton.textContent = "Remove";
          img.src = item.img;
          name.textContent = item.name;
          price.textContent = item.price;
          console.log(container.children);
          // Append element:
          cartItem.append(img, name, price, removeButton);
          container.appendChild(cartItem);
        }
      });
    });
    // Create check out button once the item appears in cart:
    const checkoutButton = document.createElement("button");
    checkoutButton.classList.add("btn", "btn-primary");
    checkoutButton.id = "checkout";
    checkoutButton.textContent = "CHECKOUT";
    checkoutButton.style.margin = "2rem";
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
    // Toggle the display values:
    displayToggle(cartPopup, "block");
    // Render cart box to user interface:
    renderCartBox(cart, item, cartContainer);
  }
});

// Listening the click:
cartContainer.addEventListener("click", (event) => {
  // if remove is clicked then item will be remove:
  removeFromCart(event, cart, cartContainer);
});
