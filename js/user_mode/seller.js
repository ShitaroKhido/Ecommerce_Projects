// SELLER SIDE FUNCTION-----------------------------------
const activateSellerMode = (container) => {
  // Creating element for the seller option template:
  const optionsContainer = document.createElement("div");
  const form = document.createElement("form");
  const formTitle = document.createElement("legend");
  const inputName = document.createElement("input");
  const inputDescriptoin = document.createElement("input");
  const inputImgURL = document.createElement("input");
  const inputPrice = document.createElement("input");
  const addItemButton = document.createElement("div");
  const currency = document.createElement("select");
  const currencyOptOne = document.createElement("option");
  const currencyOptTwo = document.createElement("option");
  // Adding class name to needed element:
  optionsContainer.classList.add("seller-options");
  form.classList.add("add-product");
  currency.classList.add("btn", "btn-primary");
  addItemButton.classList.add("btn", "btn-primary");
  // Set the attribute to needed element:
  inputDescriptoin.setAttribute("name", "productDesscription");
  inputName.setAttribute("name", "productName");
  inputImgURL.setAttribute("name", "productImgURL");
  inputPrice.setAttribute("name", "productPrice");
  currency.setAttribute("name", "productPrice");
  currencyOptOne.setAttribute("value", "riels");
  currencyOptTwo.setAttribute("value", "dollars");
  inputDescriptoin.setAttribute("placeholder", "Desscription");
  inputName.setAttribute("placeholder", "Name");
  inputImgURL.setAttribute("placeholder", "Images URL links");
  inputPrice.setAttribute("placeholder", "Price");
  // Set texts content to needed element:
  formTitle.textContent = "Add product";
  addItemButton.textContent = "ADD ITEM";
  currencyOptOne.textContent = "Riels";
  currencyOptTwo.textContent = "Dollars";
  // Appending Elements:
  currency.append(currencyOptOne, currencyOptTwo);
  form.append(
    formTitle,
    inputName,
    inputDescriptoin,
    inputImgURL,
    inputPrice,
    currency,
    addItemButton
  );
  optionsContainer.append(form);
  container.prepend(optionsContainer);
  // Render the UI as edit mode:
  renderUI(item, productContainer, "buy");
};

const addItemData = (form, dataList) => {
  if (
    (form.productName.value.trim() &&
      form.productDesscription.value.trim() &&
      form.productImgURL.value.trim() &&
      form.productPrice.value &&
      form.currency.value) !== ""
  ) {
    // Querying input values by using name attribute in form element:
    let item = {};
    // Assign data to each objects instance:
    item.name = form.productName.value;
    item.description = form.productDesscription.value;
    item.img = form.productImgURL.value;
    item.rate = 0;
    item.price = form.productPrice.value;
    item.currency = form.currency.value;
    item.id = idGenerator();
    // Append item object to data list:
    dataList.push(item);
  } else {
    alert("Please fill in the blank!");
  }
};

const removeItemData = (itemID, dataList) => {
  // Loop through list of data:
  dataList.forEach((item, index) => {
    // Check for matches ID of the item, else return null:
    item.id === itemID ? delete dataList[index] : null;
  });
};
// MAIN CODE-----------------------------------------------
// Activate user to seller mode:
activateSellerMode(mainContainer);
const addInForm = document.querySelector(".add-product");

// EVENT LISTENER
document.addEventListener("click", (event) => {
  if (event.target.id === "removeItem") {
    let itemID = event.target.parentElement.parentElement.id;
    // console.log(itemID):
    removeItemData(itemID, item);
    renderUI(item, a, "edit");
  }
});

addInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addItemData(addInForm, item);
  renderUI(item, a, "edit");
});
