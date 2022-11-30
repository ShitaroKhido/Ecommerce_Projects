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
  a.setAttribute("href", "#");
  a.append(i);
  li.append(a);
  container.appendChild(li);
};
const createCard = (item, mode) => {
  //  Create html card element by using DOM:
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardProductInfo = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDescription = document.createElement("div");
  const cardRate = document.createElement("div");
  const cardFooter = document.createElement("div");
  const cardPrice = document.createElement("span");
  const cardButton = document.createElement("button");

  // Assign class name to each elements:
  card.className = "card";
  cardImg.className = "product-img";
  cardProductInfo.className = "product-info";
  cardTitle.className = "title";
  cardDescription.className = "description";
  cardRate.className = "rate";
  cardFooter.className = "card-footer";
  cardPrice.className = "price";

  // Check if it's buy or edit usermode:
  if (mode === "edit") {
    const removeButton = document.createElement("button");
    removeButton.id = "removeItem";
    removeButton.classList.add("btn", "btn-danger");
    removeButton.textContent = "Remove";
    cardFooter.appendChild(removeButton);
    cardButton.classList.add("edit", "btn", "btn-primary");
  } else if (mode === "buy") {
    cardButton.classList.add("buy", "btn", "btn-primary");
  }
  // Convert Rate values to elements:
  for (let i = 0; i < Math.round(item.rate); i++) {
    cardRate.innerHTML += `<i class="material-icons">star</i>`;
  }

  // Fill in each element content:
  card.id = item.id;
  cardImg.src = item.img;
  cardTitle.textContent = item.name;
  cardDescription.textContent = item.description;
  cardPrice.textContent = item.price;
  cardButton.textContent = String(mode).toUpperCase();

  // Directly append element to other element by using append method:
  cardFooter.append(cardPrice, cardButton);
  cardProductInfo.append(cardTitle, cardDescription, cardRate);
  card.append(cardImg, cardProductInfo, cardFooter);

  return card;
};
const createCard = (item, mode) => {
  //  Create html card element by using DOM:
  let rate = "";
  for( let i=0; i< Math.round(item.rate); i++){
      rate += `<i class="material-icons">star</i>`;
      console.log(rate)
  }
  const card = createElementTemplate(
    `<div class="card" id="${item.id}">
      <img src="${item.img}" alt="" class="product-img">
      <div class="product-info">
          <div class="title">${item.name}</div>
          <div class="description">${item.description}</div>
          <div class="rate">${rate}</div>
      </div>
      <div class="card-footer">
          <span class="price">${item.price}</span>
          <button class="btn btn-primary">BUY</button>
      </div>
    </div>`
  )
  return card;
};