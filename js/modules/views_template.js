// THIS FILES CONTAINS UI FUNCTION WHICH GENERATE THE ELEMENT INTO HTML FILES.

// FUNCTIONS------------------------------------------
const productForm = (formMode = String(), containers) => {
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
  cancelButton.textContent = "CANCEL";

  // CHECK form mode MODE
  button.classList.add("btn", "btn-primary");
  button.id = `${formMode.trim().toLowerCase()}-product`;
  button.textContent = "SAVE";
  form.id = `${formMode.trim().toLowerCase()}-item-form`;
  container.id = `${formMode.trim().toLowerCase()}-item-container`;

  if (formMode.trim().toLowerCase() === "add") {
    textarea.setAttribute("placeholder", "Product descriptions.");
    textarea.setAttribute("required", "");
    button.textContent = formMode.trim().toUpperCase();
  }
  legend.textContent = `${formMode.trim()} product`;

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
  return containers.appendChild(container);
};

const productCard = (data, cardMode = String(), container) => {
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
  button.classList.add("btn", "btn-good");
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
    delBtn.classList.add("btn", "btn-danger");
    delBtn.id = "delete-product";
    delBtn.textContent = "DELETE";
    cardFoot.append(delBtn);
  } else if (cardMode.trim() === "sell") {
    button.textContent = "BUY";
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

const boxItemCard = (data, containers, buttonText = String()) => {
  const item = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("div");
  const button = document.createElement("button");

  item.className = "item";
  name.className = "item-name";
  button.className = "btn";
  if (buttonText.trim() === "cart" || buttonText.trim() === "checkout") {
    button.classList.add("btn-danger");
    button.textContent = "REMOVE";
  } else if (buttonText.trim() === "search") {
    button.classList.add("btn-good");
    button.textContent = "BUY";
  } else {
    button.textContent = buttonText.toUpperCase();
  }
  name.textContent = data.name;
  img.src = data.img;
  item.append(img, name, button);
  return containers.appendChild(item);
};

const cartBox = (cartDataList, containers, type = String()) => {
  const container = document.createElement("div");
  const cart = document.createElement("div");
  if (type.trim() === "cart" || type.trim() === "checkout") {
    const title = document.createElement("h2");
    title.textContent = "Your cart list";
    cart.className = "cart";
    container.className = `cart-container`;
    container.appendChild(title);
  } else if (type.trim() === "search") {
    cart.className = "cart";
    container.className = `cart-container`;
  }
  cartDataList.forEach((item) => {
    boxItemCard(item, cart, type);
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

  name.setAttribute("name", "name");
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
  container.append(cartBox(cartDataList, container, "checkout"), checkout);
  dialog.appendChild(container);
  console.log(container);
  return containers.appendChild(dialog);
};

const searchMenu = (containers, type = String()) => {
  const container = document.createElement("div");
  container.id = `${type}-search-section`;

  const formSearch = document.createElement("form");
  const searchBox = document.createElement("input");
  const searchIcon = document.createElement("i");

  formSearch.className = "search-box";

  searchBox.setAttribute("type", "search");
  searchBox.setAttribute("name", "searchBox");
  searchBox.setAttribute("placeholder", "Search");
  searchIcon.classList.add("material-icons", "btn", "btn-primary");
  searchIcon.textContent = "search";

  if (type.trim() === "body") {
    const formFilter = document.createElement("form");
    formFilter.className = "search-filter";

    const categories = document.createElement("select");
    const country = document.createElement("select");
    const priceRange = document.createElement("select");
    const alphabetical = document.createElement("select");
    categories.setAttribute("name", "categories");
    country.setAttribute("name", "country");
    priceRange.setAttribute("name", "priceRange");
    alphabetical.setAttribute("name", "alphabetical");

    const categOption1 = document.createElement("option");
    const categOption2 = document.createElement("option");
    const categOption3 = document.createElement("option");
    const categOption4 = document.createElement("option");
    const categOption5 = document.createElement("option");
    const categOption6 = document.createElement("option");
    categOption1.setAttribute("selected", "");
    categOption1.setAttribute("disabled", "");
    categOption2.setAttribute("value", "electronics");
    categOption3.setAttribute("value", "households");
    categOption4.setAttribute("value", "cloths");
    categOption5.setAttribute("value", "diy");
    categOption6.setAttribute("value", "accessories");
    categOption1.textContent = "Categories";
    categOption2.textContent = "Electronics";
    categOption3.textContent = "Households";
    categOption4.textContent = "Cloths";
    categOption5.textContent = "DIY Items";
    categOption6.textContent = "Accessories";

    const countryOption1 = document.createElement("option");
    const countryOption2 = document.createElement("option");
    const countryOption3 = document.createElement("option");
    const countryOption4 = document.createElement("option");
    countryOption1.setAttribute("selected", "");
    countryOption1.setAttribute("disabled", "");
    countryOption2.setAttribute("value", "kh");
    countryOption3.setAttribute("value", "uk");
    countryOption4.setAttribute("value", "us");
    countryOption1.textContent = "Country";
    countryOption2.textContent = "Cambodia";
    countryOption3.textContent = "United Kindom";
    countryOption4.textContent = "United State";

    const priceOption1 = document.createElement("option");
    const priceOption2 = document.createElement("option");
    const priceOption3 = document.createElement("option");
    priceOption1.setAttribute("selected", "");
    priceOption1.setAttribute("disabled", "");
    priceOption2.setAttribute("value", "low");
    priceOption3.setAttribute("value", "high");
    priceOption1.textContent = "Price range";
    priceOption2.textContent = "Low to High";
    priceOption3.textContent = "High to Low";

    const alphabetOption1 = document.createElement("option");
    const alphabetOption2 = document.createElement("option");
    const alphabetOption3 = document.createElement("option");
    alphabetOption1.setAttribute("selected", "");
    alphabetOption1.setAttribute("disabled", "");
    alphabetOption2.setAttribute("value", "a");
    alphabetOption3.setAttribute("value", "z");

    alphabetOption1.textContent = "From letters";
    alphabetOption2.textContent = "A to Z";
    alphabetOption3.textContent = "Z to A";
    categories.append(
      categOption1,
      categOption2,
      categOption3,
      categOption4,
      categOption5,
      categOption6
    );
    country.append(
      countryOption1,
      countryOption2,
      countryOption3,
      countryOption4
    );
    formFilter.append(categories, country, priceRange, alphabetical);
    alphabetical.append(alphabetOption1, alphabetOption2, alphabetOption3);
    priceRange.append(priceOption1, priceOption2, priceOption3);
    container.prepend(formFilter);
  }

  formSearch.append(searchBox, searchIcon);
  container.append(formSearch);
  return containers.appendChild(container);
};

const productViewsContainer = (
  containers,
  productDataList = Array(),
  viewMode = String()
) => {
  const container = document.createElement("div");
  const subContainer = document.createElement("div");
  const addButton = document.createElement("button");
  addButton.classList.add("btn", "btn-good");
  addButton.id = "add";
  addButton.textContent = "ADD ITEM"
  productDataList.forEach((item) => {
    productCard(item, viewMode, subContainer);
  });
  container.appendChild(addButton);
  container.appendChild(subContainer)
  subContainer.className = "product"
  container.className = "product-display";
  return containers.appendChild(container);
};

const deploySearchBox = (container, dataList = Array(), type = String()) => {
  const searchResultContainer = container;
  const search = searchMenu(searchResultContainer, type);
  cartBox(dataList, search, "search");
  return search;
};

// EXPORT FUNCTION:
export {
  deploySearchBox,
  productViewsContainer,
  productForm,
  productCard,
  productDetails,
  boxItemCard,
  cartBox,
  checkoutProduct,
  searchMenu,
};
