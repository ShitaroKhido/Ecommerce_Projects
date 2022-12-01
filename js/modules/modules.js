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

// MAIN CODE-------------------------------------------------------------
const mainContainer = document.querySelector(".container");
const productContainer = document.querySelector(".product-views");
const userIcons = document.querySelector("#userIcons");
let data = [
  {
    name: "Sell Organ (Kidney)",
    description:"This the product representation text which mean that this could be and a great thing or not bla bla bla",
    price:20000,
    rate: 3,
    id: "irpoqqot",
    img: "https://static.vecteezy.com/system/resources/previews/005/920/692/original/human-kidney-and-its-arteries-isolated-on-white-background-illustration-of-human-kidney-organ-free-vector.jpg",
    currency: "dollars",
  },
  {
    name: "Sell Organ (Liver)",
    description: "This the product representation text which mean that this could be and a great thing or not bla bla bla",
    img: "https://img.freepik.com/free-vector/liver-anatomy-human-body_1308-81771.jpg",
    rate: 0,
    price: 2000,
    currency: "dollars",
    id: "fs7rwfx7",
  },
  {
    name: "Sell Organ (Heart)",
    description:"This the product representation text which mean that this could be and a great thing or not bla bla bla",
    img: "https://static.vecteezy.com/system/resources/previews/004/210/260/non_2x/heart-organ-human-free-vector.jpg",
    rate: 0,
    price: 12000000,
    currency: "riels",
    id: "fk7nrcbo",
  },
];

// saveToLocalStorage("itemDataList", data);
let itemDataList = loadFromLocalStorage("itemDataList");
renderUI(itemDataList, productContainer, "buy");
