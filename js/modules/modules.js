// FUNCTIONS-------------------------------------------------------------


const createCard = (item, mode) => {
  //  Create html card element by using DOM.
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardProductInfo = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDescription = document.createElement("div");
  const cardRate = document.createElement("div");
  const cardFooter = document.createElement("div");
  const cardPrice = document.createElement("span");
  const cardButton = document.createElement("button");

  // Assign class name to each elements
  card.className = "card";
  cardImg.className = "product-img";
  cardProductInfo.className = "product-info";
  cardTitle.className = "title";
  cardDescription.className = "description";
  cardRate.className = "rate";
  cardFooter.className = "card-footer";
  cardPrice.className = "price";

  // Check if it's buy or edit usermode
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
  // Convert Rate values to elements
  for (let i = 0; i < Math.round(item.rate); i++) {
    cardRate.innerHTML += `<i class="material-icons">star</i>`;
  }

  // Fill in each element content
  card.id = idGenerator();
  cardImg.src = item.img;
  cardTitle.textContent = item.name;
  cardDescription.textContent = item.description;
  cardPrice.textContent = item.price;
  cardButton.textContent = String(mode).toUpperCase();

  // Directly append element to other element by using append method
  cardFooter.append(cardPrice, cardButton);
  cardProductInfo.append(cardTitle, cardDescription, cardRate);
  card.append(cardImg, cardProductInfo, cardFooter);

  return card;
};

const renderUI = (itemDataList, container, mode) => {
  container.innerHTML = "";
  itemDataList.forEach((item) => {
    container.appendChild(createCard(item, mode));
  });
};

const idGenerator = () => {
  let dateNow = Date.now();
  let uid = parseInt(Math.random() * dateNow).toString(36);
  return uid;
};

const show = (element, displayType) => {
  element.style.display = displayType;
};

const hide = (element) => {
  element.style.display = "none";
};

// CONST AND VARIABLEs-------------------------------------------------------------
let itemData = JSON.parse(localStorage.getItem("itemData"));
const a = document.querySelector(".product-views");
const item = [
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
  {
    name: "Test product",
    description: "Tsting........",
    img: "imgs/logo/Logo-dark.png",
    rate: 2,
    price: 234,
    currency: "$",
    id: idGenerator(),
  },
];

renderUI(item, a, "buy");
