// FUNCTIONS-------------------------------------------------------------
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
  if (Math.round(item.rate) !== (0 && null)) {
    for (let i = 0; i < Math.round(item.rate); i++) {
      cardRate.innerHTML += `<i class="material-icons">star</i>`;
    }
  } else {
    cardRate.innerHTML = `<p>Not yet rated</p>`;
  }
  // Fill in each element content:
  card.id = item.id;
  cardImg.src = item.img;
  cardTitle.textContent = item.name;
  cardDescription.textContent = item.description;
  cardPrice.textContent = currencyCheck(item);
  cardPrice.textContent += item.price;
  cardButton.textContent = String(mode).toUpperCase();

  // Directly append element to other element by using append method:
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
// BASIC TOOLS FUNCTION
const saveToLocalStorage = (key, data) => {
  // Save data to local storage:
  localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)); // Load data from local storage:

// Check if currency type is dollars or riels:
const currencyCheck = (item) => (item.currency === "dollars" ? "$" : "៛");

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

const displayToggle = (element, displayType) => {
  if (element.style.display === "none") {
    show(element, displayType);
  } else {
    hide(element);
  }
};
// CONST AND VARIABLEs-------------------------------------------------------------
const mainContainer = document.querySelector(".container");
const productContainer = document.querySelector(".product-views");
const userIcons = document.querySelector("#userIcons");
let data = [
  {
    name: "Test",
    description: "Test......",
    price: 123,
    rate: 3,
    id: idGenerator(),
    img: "imgs/logo/Logo-color.png",
  },
  {
    name: "Test",
    description: "Test......",
    price: 123,
    rate: 3,
    id: idGenerator(),
    img: "imgs/logo/Logo-color.png",
  },
  {
    name: "Test",
    description: "Test......",
    price: 123,
    rate: 3,
    id: idGenerator(),
    img: "imgs/logo/Logo-color.png",
  },
  {
    name: "Test",
    description: "Test......",
    price: 123,
    rate: 3,
    id: idGenerator(),
    img: "imgs/logo/Logo-color.png",
  },
];

// saveToLocalStorage("itemDataList", data);
let itemDataList = loadFromLocalStorage("itemDataList");
// loadFromLocalStorage("item")
renderUI(itemDataList, productContainer, "buy");
