// SELLER SIDE FUNCTION-----------------------------------
const activateCustumerMode = (container) => {
  createLinkIcon("shopping_cart", userIcons);
  createCartBox(container);
  renderUI(itemDataList, productContainer, "buy");
  // Adding a count item number for cart list:
  const span = document.createElement("span");
  span.textContent = 0;
  span.id = "cart-count";
  const cartIcon = document.querySelector("#shopping_cart").parentElement;
  cartIcon.append(span);
};
const createCartBox = (container) => {
  // FUNCTION: CREAT CART BOX TEMPLATE
  const cartBox = document.createElement("div");
  const h3 = document.createElement("h3");
  const cartContainer = document.createElement("div");
  cartBox.style.display = "none";
  h3.textContent = "Yours cart list";
  cartBox.id = "cart-box";
  cartContainer.classList.add("cart-container");
  cartBox.append(h3, cartContainer);
  container.prepend(cartBox);
};
const createLinkIcon = (name, container) => {
  // FUNCTION: CREATE NAV ICON LINK TEMPLATE
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");
  li.classList.add("nav-item");
  a.classList.add("nav-link");
  i.classList.add("material-icons");
  i.textContent = name;
  i.id = name;
  a.setAttribute("href", "#");
  a.append(i);
  li.append(a);
  container.innerHTML = "";
  container.appendChild(li);
};
const updateCount = (list, id) =>
  (document.querySelector(`#${id}`).textContent = list.length);
const addToCart = (event, cartList, container) => {
  // Add ID of the item to cart array list:
  if (event.target.textContent === "BUY") {
    cartList.push(event.target.parentElement.parentElement.id);
    renderCartBox(cartList, itemDataList, container);
    if (cartList.length > 0) {
      // Updating cart count number on UI:
      updateCount(cartList, "cart-count");
    }
  }
};

const removeFromCart = (event, cartList, container) => {
  // Remove ID of the item to cart array list:
  if (event.target.textContent === "Remove") {
    cartList.pop(event.target.parentElement.id);
    updateCount(cartList, "cart-count");
    renderCartBox(cartList, itemDataList, container);
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
          price.textContent = currencyCheck(item);
          price.textContent += item.price;
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
// Activate Customer mode:
activateCustumerMode(mainContainer);
const cartPopup = document.querySelector("#cart-box");
const cartContainer = document.querySelector("#cart-box .cart-container");
const cartDataList = [];

// EVENT LISTENER
document.body.addEventListener("click", (event) => {
  addToCart(event, cartDataList, cartContainer);
  if (event.target.textContent === "shopping_cart") {
    // Toggle the display values:
    displayToggle(cartPopup, "block");
    // Render cart box to user interface:
    renderCartBox(cartDataList, itemDataList, cartContainer);
  }
});

// Listening the click:
cartContainer.addEventListener("click", (event) => {
  // if remove is clicked then item will be remove:
  removeFromCart(event, cartDataList, cartContainer);
});
