// THIS FILES CONTAINS UI FUNCTION WHICH GENERATE THE ELEMENT INTO HTML FILES.

// FUNCTIONS------------------------------------------
const productForm = (formMode, containers) => {
  // CREATE DOM ELEMENTS.
  const container = document.createElement("div");
  const form = document.createElement("form");
  const button = document.createElement("button");
  const legend = document.createElement("legend");
  const textarea = document.createElement("textarea");
  const inputName = document.createElement("input");
  const inputImgURL = document.createElement("input");
  const inputPrice = document.createElement("input");
  const selectCountry = document.createElement("select");
  const selectCurrency = document.createElement("select");
  const selectCategories = document.createElement("select");
  // Country options:
  const selectCountryTwo = document.createElement("option");
  const selectCountryOne = document.createElement("option");
  const selectCountryThree = document.createElement("option");
  const selectCountryFour = document.createElement("option");
  // Currency options:
  const selectCurrencyOne = document.createElement("option");
  const selectCurrencyTwo = document.createElement("option");
  const selectCurrencyThree = document.createElement("option");
  // Categories options:
  const selectCategoriesOne = document.createElement("option");
  const selectCategoriesTwo = document.createElement("option");
  const selectCategoriesThree = document.createElement("option");
  const selectCategoriesFour = document.createElement("option");
  const selectCategoriesFive = document.createElement("option");
  const selectCategoriesSix = document.createElement("option");
  // ADD ATTRIBUTE TO ELEMENTS.
  // Placeholder attribute
  inputName.setAttribute("placeholder", "Product name");
  inputImgURL.setAttribute("placeholder", "Image URL");
  inputPrice.setAttribute("placeholder", "Prices");
  // Name attribute
  inputName.setAttribute("name", "name");
  inputImgURL.setAttribute("name", "image");
  inputPrice.setAttribute("name", "price");
  selectCurrency.setAttribute("name", "currency");
  selectCountry.setAttribute("name", "country");
  selectCategories.setAttribute("name", "categories");
  textarea.setAttribute("name", "description");
  // Type attribute
  inputName.setAttribute("type", "text");
  inputImgURL.setAttribute("type", "url");
  inputPrice.setAttribute("type", "number");

  selectCountryOne.setAttribute("selected", "");
  selectCountryOne.setAttribute("disabled", "");
  selectCountryTwo.setAttribute("value", "kh");
  selectCountryThree.setAttribute("value", "uk");
  selectCountryFour.setAttribute("value", "us");

  selectCurrencyOne.setAttribute("selected", "");
  selectCurrencyOne.setAttribute("disabled", "");
  selectCurrencyTwo.setAttribute("value", "usd");
  selectCurrencyThree.setAttribute("value", "riels");

  selectCategoriesOne.setAttribute("selected", "");
  selectCategoriesOne.setAttribute("disabled", "");
  selectCategoriesTwo.setAttribute("value", "electronics");
  selectCategoriesThree.setAttribute("value", "households");
  selectCategoriesFour.setAttribute("value", "cloths");
  selectCategoriesFive.setAttribute("value", "diy");
  selectCategoriesSix.setAttribute("value", "accessories");

  selectCountryOne.textContent = "Country";
  selectCountryTwo.textContent = "Cambodia";
  selectCountryThree.textContent = "United Kindom";
  selectCountryFour.textContent = "United State";

  selectCurrencyOne.textContent = "Currency";
  selectCurrencyTwo.textContent = "USD";
  selectCurrencyThree.textContent = "Riels";

  selectCategoriesOne.textContent = "Categories";
  selectCategoriesTwo.textContent = "Electronics";
  selectCategoriesThree.textContent = "Households";
  selectCategoriesFour.textContent = "Cloths";
  selectCategoriesFive.textContent = "DIY Items";
  selectCategoriesSix.textContent = "Accessories";

  // ADD MORE ELEMENT HERE IF NECESSARY
  const cancelButton = document.createElement("button");
  cancelButton.classList.add("btn", "btn-primary");
  cancelButton.textContent = "CANCEL"


  // CHECK form mode MODE
  button.classList.add("btn", "btn-primary");
  button.id = `${formMode.trim()}-product`;
  button.textContent = "SAVE";
  form.id = `${formMode.trim()}-item-form`;
  container.id = `${formMode.trim()}-item-container`;

  if (formMode.trim() === "add") {
    textarea.setAttribute("placeholder", "Product descriptions.");
    textarea.setAttribute("required", "");
    button.textContent = formMode.trim().toUpperCase();
  }
  legend.textContent = `${formMode.trim()}-product`;

  selectCountry.append(
    selectCountryOne,
    selectCountryTwo,
    selectCountryThree,
    selectCountryFour
  );
  selectCategories.append(
    selectCategoriesOne,
    selectCategoriesTwo,
    selectCategoriesThree,
    selectCategoriesFour,
    selectCategoriesFive,
    selectCategoriesSix
  );
  selectCurrency.append(
    selectCurrencyOne,
    selectCurrencyTwo,
    selectCurrencyThree
  );
  form.append(
    legend,
    inputName,
    inputImgURL,
    inputPrice,
    selectCurrency,
    selectCountry,
    selectCategories,
    textarea,
    button,
    cancelButton
  );
  container.appendChild(form);
  containers.appendChild(container);
};

const productCard = (data, cardMode, container) => {
  // CREATE ELEMENTS
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardFoot = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const rate = document.createElement("div");
  const price = document.createElement("div");
  const button = document.createElement("button");
  // Add class
  card.className = "card";
  cardBody.className = "card-body";
  cardFoot.className = "card-foot";
  img.className = "card-img";
  title.className = "title";
  description.className = "description";
  rate.className = "rate";
  price.className = "price";
  button.classList.add("btn", "btn-primary");
  // Add contents
  img.src = data.img;
  title.textContent = data.name;
  description.textContent = data.description;
  rate.textContent = data.rate;
  price.textContent = data.price;
  // Set ID to each card:
  card.id = data.id;

  if (cardMode.trim() === "edit") {
    button.textContent = "EDIT ITEM";
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn", "btn-primary");
    delBtn.textContent = "DELETE";
    cardFoot.append(delBtn);
  } else if (cardMode.trim() === "sell") {
    button.textContent = "SELL";
  }
  cardFoot.append(price, button);
  cardBody.append(title, description, rate);
  card.append(img, cardBody, cardFoot);
  return container.appendChild(card);
};

const productDetails = (productData, containers) => {
  const container = document.createElement("div");
  const product = document.createElement("div");
  const info = document.createElement("div");
  const img = document.createElement("img");

  const br = document.createElement("br");
  const name = document.createElement("h3");
  const descriptions = document.createElement("div");
  const categories = document.createElement("div");
  const rate = document.createElement("div");
  const views = document.createElement("div");
  const country = document.createElement("div");
  const price = document.createElement("div");
  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  const descriptionsSpan = document.createElement("span");
  const categoriesSpan = document.createElement("span");
  const rateSpan = document.createElement("span");
  const viewsSpan = document.createElement("span");
  const countrySpan = document.createElement("span");

  // ADD CLASS & ID TO ELEMENTS
  container.id = "product-details-container";
  product.id = "product-details";
  info.className = "details";

  name.className = "title";
  descriptionsSpan.className = "descriptions";
  categoriesSpan.className = "categories";
  rateSpan.className = "rate-count";
  viewsSpan.className = "views-count";
  countrySpan.className = "country";
  price.className = "price";
  addButton.classList.add("btn", "btn-primary");
  cancelButton.classList.add("btn", "btn-primary");

  // ADD CONTENT TO ELEMENTS
  descriptions.textContent = "Product descriptions: ";
  categories.textContent = "Categories: ";
  rate.textContent = "User rates: ";
  views.textContent = "Views: ";
  country.textContent = "Country: ";
  addButton.textContent = "ADD TO CART";
  cancelButton.textContent = "CANCEL";
  name.textContent = productData.name;
  descriptionsSpan.textContent = productData.description;
  categoriesSpan.textContent = productData.categorie;
  rateSpan.textContent = productData.rate;
  viewsSpan.textContent = productData.views;
  countrySpan.textContent = productData.country;
  price.textContent = productData.price;
  img.src = productData.img;
  console.log(productData.name);
  // APPENDING ELEMENTS
  descriptions.append(br, descriptionsSpan);
  categories.appendChild(categoriesSpan);
  rate.appendChild(rateSpan);
  views.appendChild(viewsSpan);
  country.appendChild(countrySpan);

  info.append(
    name,
    descriptions,
    categories,
    rate,
    views,
    country,
    price,
    addButton,
    cancelButton
  );
  product.append(img, info);
  container.appendChild(product);
  return containers.appendChild(container);
};

const boxItemCard = (data, buttonText, containers) => {
  const item = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("div");
  const button = document.createElement("button");

  item.className = "item";
  name.className = "item-name";
  button.className = "btn";
  if (buttonText.trim() === "cart" || buttonText.trim() === "search" || buttonText.trim()==="checkout") {
    button.classList.add("btn-danger");
    button.textContent = "REMOVE";
    if (buttonText.trim() === "search"){
      button.textContent = "BUY";
    }
  } else {
    button.textContent = buttonText.toUpperCase();
  }
  name.textContent = data.name;
  img.src = data.img;
  item.append(img, name, button);
  return containers.appendChild(item);
};

const cartBox = (cartDataList, containers, type) => {
  const container = document.createElement("div");
  const cart = document.createElement("div");
  // cart.className = type.trim()==="cart" || type.trim()==="checkout"? type.trim(): "search";
  // container.className = type.trim()==="cart" || type.trim()==="checkout"? `${type.trim()}-container`: "search-container";
  
  if (type.trim()==="cart" || type.trim()==="checkout"){
    const title = document.createElement("h2");
    title.textContent = "Your cart list";
    cart.className = "cart";
    container.className = `cart-container`;
    container.appendChild(title);
  } 
  cartDataList.forEach((item) => {
    boxItemCard(item, type, cart);
  });
  container.appendChild(cart);
  return containers.appendChild(container);
};

const checkoutProduct = (containers, cartDataList) => {
  const container = document.createElement("div");
  const dialog = document.createElement("div");
  const legend = document.createElement("legend");
  const checkout = document.createElement("form");
  const name = document.createElement("input");
  const pkgName = document.createElement("input");
  const address = document.createElement("input");
  const country = document.createElement("input");
  const postal = document.createElement("input");
  const card = document.createElement("input");
  const csc = document.createElement("input");
  const expire = document.createElement("input");
  const confirmButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  // ADD CLASS
  container.className = "checkout-container";
  checkout.className = "checkout";
  dialog.className = "checkout-dialog";
  confirmButton.classList.add("btn", "btn-primary");
  cancelButton.classList.add("btn", "btn-primary");
  // ADD ATTRIBUTE
  name.setAttribute("type", "text");
  pkgName.setAttribute("type", "text");
  address.setAttribute("type", "text");
  country.setAttribute("type", "text");
  postal.setAttribute("type", "number");
  card.setAttribute("type", "number");
  csc.setAttribute("type", "number");
  expire.setAttribute("type", "date");

  name.setAttribute("name", "name")
  pkgName.setAttribute("name", "pagkageName");
  address.setAttribute("name", "address");
  country.setAttribute("name", "country");
  postal.setAttribute("name", "postalCode");
  card.setAttribute("name", "card");
  csc.setAttribute("name", "csc");
  expire.setAttribute("name", "expireDate");

  name.setAttribute("placeholder", "Card holder name");
  pkgName.setAttribute("placeholder", "Name your packages");
  address.setAttribute("placeholder", "Your address");
  country.setAttribute("placeholder", "Country");
  postal.setAttribute("placeholder", "Postal code");
  card.setAttribute("placeholder", "Credit card number");
  csc.setAttribute("placeholder", "CSC code");

  postal.setAttribute("inputmode", "numeric");
  card.setAttribute("inputmode", "numeric");

  card.setAttribute("maxlength", "19");
  csc.setAttribute("maxlength", "3");
  pkgName.setAttribute("maxlength", "80");
  // ADD CONTENT TO ELEMENT
  confirmButton.textContent = "CONFIRMS";
  cancelButton.textContent = "CANCEL";
  legend.textContent = "CHECKOUT";
  checkout.append(
    legend,
    pkgName,
    address,
    country,
    postal,
    name,
    card,
    csc,
    expire,
    confirmButton,
    cancelButton
  );
  container.append(
    cartBox(cartDataList, container, "checkout"),
    checkout,
  );
  dialog.appendChild(container)
  console.log(container)
  return containers.appendChild(dialog);
};



// MAIN CODE-----------------------------------------
const contain = document.querySelector(".container");
const searchResultContainer = document.querySelectorAll(".search-section")
const productList = [
  {
    name: "Tablet",
    description: "This is the card description",
    categorie: "electronic",
    rate: 2,
    views: 10,
    img: "imgs/logo/Logo-color.png",
    country: "uk",
    price: 259,
    currency: "usd",
    id: 1340,
  },
  {
    name: "Tablet",
    description: "This is the card description",
    categorie: "electronic",
    rate: 4,
    views: 20,
    img: "imgs/logo/Logo-color.png",
    country: "uk",
    price: 2359,
    currency: "usd",
    id: 1540,
  },
];



// cartBox(productList, contain, "cart")
// searchResultContainer.forEach(searchBox=>{
//   cartBox(productList, searchBox, "search")
// })
// checkoutProduct(contain, productList)
productForm("edit", contain)
// productDetails(productList[0], contain)