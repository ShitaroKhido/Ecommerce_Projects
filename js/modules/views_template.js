export const createForm = (name) => {
  // THIS FORM IS TEPLATE FOR EDIT AND ADD PRODUCT FORM:
  // Using two type of name to match with style: add edit
  const container = document.createElement("form");
  const form = document.createElement("form");
  const legend = document.createElement("legend");
  const inputName = document.createElement("input");
  const inputImage = document.createElement("input");
  const inputPrice = document.createElement("input");
  const inputDescription = document.createElement("textarea");

  container.id = `${name}-form-container`;
  form.className = `${name}-form`;
  legend.className = `${name}-legend`;
  legend.textContent = `${name.toUpperCase()} PRODUCT`;
  inputName.setAttribute("name", "name");
  inputImage.setAttribute("name", "img");
  inputPrice.setAttribute("name", "price");
  inputDescription.setAttribute("name", "description");

  inputName.setAttribute("placeholder", "Product name");
  inputImage.setAttribute("placeholder", "Images URL");
  inputPrice.setAttribute("placeholder", "Prices");
  inputDescription.setAttribute("placeholder", "Description");

  inputName.setAttribute("type", "text");
  inputImage.setAttribute("type", "url");
  inputPrice.setAttribute("type", "number");

  const confirmButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  confirmButton.classList.add("btn", "btn-good");
  cancelButton.classList.add("btn", "btn-danger");
  confirmButton.textContent = `CONFIRMS`;
  cancelButton.textContent = "CANCEL";
  confirmButton.setAttribute("type", "submit");
  // cancelButton.setAttribute("type", "submit");

  const categories = document.createElement("select");
  const country = document.createElement("select");
  const currency = document.createElement("select");
  categories.setAttribute("name", "categories");
  country.setAttribute("name", "country");
  currency.setAttribute("name", "currency");

  const categOption1 = document.createElement("option");
  const categOption2 = document.createElement("option");
  const categOption3 = document.createElement("option");
  const categOption4 = document.createElement("option");
  categOption1.setAttribute("selected", "");
  categOption1.setAttribute("disabled", "");
  categOption2.setAttribute("value", "electronics");
  categOption3.setAttribute("value", "clothes");
  categOption4.setAttribute("value", "diy");
  categOption1.textContent = "Categories";
  categOption2.textContent = "Electronics";
  categOption3.textContent = "Clothes";
  categOption4.textContent = "DIY Items";

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
  countryOption3.textContent = "United Kingdom";
  countryOption4.textContent = "United State";

  const currencyOption1 = document.createElement("option");
  const currencyOption2 = document.createElement("option");
  const currencyOption3 = document.createElement("option");
  const currencyOption4 = document.createElement("option");
  currencyOption1.setAttribute("selected", "");
  currencyOption1.setAttribute("disabled", "");
  currencyOption2.setAttribute("value", "riel");
  currencyOption3.setAttribute("value", "euro");
  currencyOption4.setAttribute("value", "dollar");
  currencyOption1.textContent = "Curreny";
  currencyOption2.textContent = "Riels ៛";
  currencyOption3.textContent = "Euro €";
  currencyOption4.textContent = "Dollars $";

  categories.append(categOption1, categOption2, categOption3, categOption4);

  country.append(
    countryOption1,
    countryOption2,
    countryOption3,
    countryOption4
  );

  currency.append(
    currencyOption1,
    currencyOption2,
    currencyOption3,
    currencyOption4
  );

  form.append(
    legend,
    inputName,
    inputImage,
    categories,
    country,
    inputPrice,
    currency,
    inputDescription,
    confirmButton,
    cancelButton
  );
  container.appendChild(form);
  return container;
};

export const creatCheckout = (name, productData) => {
  // CREATE A CHECKOUT TEMPLATE:
  // For the available styles name plaese use name = "checkout"
  const container = document.createElement("form");
  const form = document.createElement("form");
  const legend = document.createElement("legend");
  const inputName = document.createElement("input");
  const inputPrice = document.createElement("input");

  container.id = `${name}-form-container`;
  form.className = `${name}-form`;
  legend.className = `${name}-legend`;
  legend.textContent = `${name.toUpperCase()} PRODUCT`;
  inputName.setAttribute("name", "name");
  inputPrice.setAttribute("name", "price");

  inputName.setAttribute("placeholder", "Card name");
  inputPrice.setAttribute("placeholder", "Prices");

  inputName.setAttribute("type", "text");
  inputPrice.setAttribute("type", "number");
  inputPrice.setAttribute("disabled", "");
  inputPrice.value = priceCheckToText(productData.currency,productData.price);

  const confirmButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  confirmButton.classList.add("btn", "btn-good");
  cancelButton.classList.add("btn", "btn-danger");
  confirmButton.textContent = `CONFIRMS`;
  cancelButton.textContent = "CANCEL";

  const country = document.createElement("input");
  const creditCard = document.createElement("input");
  const csc = document.createElement("input");
  const expireDate = document.createElement("input");
  const address = document.createElement("input");
  country.setAttribute("name", "country");
  creditCard.setAttribute("name", "creditCard");
  csc.setAttribute("name", "cscCode");
  expireDate.setAttribute("name", "expireDate");

  country.setAttribute("type", "text");
  creditCard.setAttribute("type", "tel");
  csc.setAttribute("type", "number");
  expireDate.setAttribute("type", "date");

  creditCard.setAttribute("inputmode", "numeric");
  creditCard.setAttribute("pattern", "[0-9s]{13,19}");
  creditCard.setAttribute("maxlength", "19");
  csc.setAttribute("maxlength", "3");
  csc.setAttribute("minlength", "3");

  country.setAttribute("placeholder", "Country");
  creditCard.setAttribute("placeholder", "Credit card number");
  csc.setAttribute("placeholder", "CSC Code");
  expireDate.setAttribute("placeholder", "Expire data");
  address.setAttribute("placeholder", "Your address");

  const sideImage = document.createElement("img");
  sideImage.src = productData.img;

  form.append(
    legend,
    inputPrice,
    country,
    address,
    inputName,
    creditCard,
    csc,
    expireDate,
    confirmButton,
    cancelButton
  );
  container.append(sideImage, form);
  return container;
};

export const createCard = (cardData, buttonName = [], buttonType) => {
  // CARD TEMPLATE FOR THE PRODUCT
  // Take 3 input data infromation for card, button name, button type.
  const card = document.createElement("div");
  const body = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("div");
  const content = document.createElement("p");
  const rate = document.createElement("div");
  const views = document.createElement("div");
  const footer = document.createElement("div");
  const price = document.createElement("div");
  // Check user mode then if matcher then add class to button:
  buttonName.forEach((name, index) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.id = `${name.toLowerCase()}-card`;
    footer.prepend(button);
    if (buttonType === "customer") {
      button.classList.add("btn", "btn-primary");
      if (index === 0) {
        button.classList.add("btn-good");
      }
    } else if (buttonType === "editor") {
      button.classList.add("btn", "btn-good");
      if (index === 1) {
        button.classList.add("btn-danger");
      }
    }
  });
  // This line 231 is to prevent the multiple show star bug
  rate.textContent = `Rate : `;
  // Create star sign which fit with rate values:
  for (let i = 0; i < Math.round(cardData.views); i++) {
    const i = document.createElement("i");
    rate.textContent = `Rate : `;
    i.className = "material-icons";
    i.textContent = "star";
    rate.appendChild(i);
  }

  card.className = `card`;
  body.className = `card-body`;
  title.className = `card-title`;
  content.className = `card-description`;
  rate.className = `card-rate`;
  views.className = `card-views`;
  image.className = `card-image`;
  footer.className = `card-footer`;
  price.className = `card-price`;
  card.id = cardData.id;

  image.src = cardData.img;
  title.textContent = cardData.name;
  content.textContent = cardData.description;
  views.textContent = `Views : ${cardData.views}`;
  image.textContent = cardData.image;
  price.textContent = priceCheckToText(cardData.currency, cardData.price);

  footer.prepend(price);
  body.append(title, content, rate, views);
  card.append(image, body, footer);
  return card;
};

export const cartBox = (id) => {
  const cart = document.createElement("div");
  const title = document.createElement("div");

  cart.className = "cart";
  title.className = "cart-title";
  title.textContent = "Your cart list"
  
  cart.appendChild(title);


  return cart;
};

export const cartItem = (productData) => {
  const item = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("div");
  const button = document.createElement("button");

  item.className = "item";
  title.className = "item-title";
  title.textContent = productData.name;
  button.classList.add("btn", "btn-danger");
  button.textContent = "REMOVE";
  button.id = "remove-item";

  item.append(img, title, button);
  return item;
};

// CONVERT PRICE TO TEXT:
const priceCheckToText = (type, amount) => {
  let price = "";
  if (type === "euro") {
    price = `€ ${amount}`;
  } else if (type === "dollar") {
    price = `$ ${amount}`;
  } else if (type === "riel") {
    price = `៛ ${amount}`;
  }
  return price;
};
