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
  const addItemButton = document.createElement("button");
  const currency = document.createElement("select");
  const currencyOptOne = document.createElement("option");
  const currencyOptTwo = document.createElement("option");
  // Adding class name to needed element:
  optionsContainer.classList.add("seller-options");
  form.classList.add("add-product");
  currency.classList.add("btn", "btn-primary");
  addItemButton.classList.add("btn", "btn-primary");
  // Set the attribute to needed element:
  inputDescriptoin.setAttribute("name", "productDescription");
  inputName.setAttribute("name", "productName");
  inputImgURL.setAttribute("name", "productImgURL");
  inputPrice.setAttribute("name", "productPrice");
  currency.setAttribute("name", "currency");

  currencyOptOne.setAttribute("value", "riels");
  currencyOptTwo.setAttribute("value", "dollars");

  inputDescriptoin.setAttribute("placeholder", "Desscription");
  inputName.setAttribute("placeholder", "Name");
  inputImgURL.setAttribute("placeholder", "Images URL links");
  inputPrice.setAttribute("placeholder", "Price");

  inputDescriptoin.setAttribute("type", "text");
  inputName.setAttribute("type", "text");
  inputImgURL.setAttribute("type", "url");
  inputPrice.setAttribute("type", "number");

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
  renderUI(itemDataList, productContainer, "edit");
};

const addItemData = (form, dataList) => {
  if (
    (form.productName.value.trim() &&
      form.productDescription.value.trim() &&
      form.productImgURL.value.trim() &&
      form.productPrice.value) !== ""
  ) {
    // Querying input values by using name attribute in form element:
    let item = {};
    // Assign data to each objects instance:
    item.name = form.productName.value;
    item.description = form.productDescription.value;
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
  saveToLocalStorage("itemDataList", dataList);
};

const removeItemData = (itemID, dataList) => {
  // Loop through list of data:
  dataList.forEach((item, index) => {
    // Check for matches ID of item:
    if (item.id === itemID) {
      dataList.pop(index);
      saveToLocalStorage("itemDataList", dataList);
    }
  });
};

const editProduct = (itemID, dataList, form, mode) => {
  dataList.forEach((item) => {
    // Check for matches ID of item:
    if (item.id === itemID && mode === "load") {
      show(form.parentElement, "flex");
      form.productName.value = item.name;
      form.productDescription.value = item.description;
      form.productImgURL.value = item.img;
      form.productPrice.value = item.price;
      form.currency.value = item.currency;
    } else if (item.id === itemID && mode === "save") {
      item.name = form.productName.value;
      item.description = form.productDescription.value;
      item.img = form.productImgURL.value;
      item.price = form.productPrice.value;
      item.currency = form.currency.value;
      saveToLocalStorage("itemDataList", dataList);
      hide(form.parentElement, "flex");
      console.log("test");
    }
  });
};
// MAIN CODE-----------------------------------------------
// Activate user to seller mode:
activateSellerMode(mainContainer);
const saveButton = document.querySelector("#save");
const addInForm = document.querySelector(".add-product");
const editForm = document.querySelector("#edit-item");
// EVENT LISTENER
document.addEventListener("click", (event) => {
  let itemID = event.target.parentElement.parentElement.id;
  if (event.target.id === "removeItem") {
    // console.log(itemID):
    removeItemData(itemID, itemDataList);
  } else if (event.target.textContent.trim() === "EDIT") {
    editProduct(itemID, itemDataList, editForm, "load");
    saveButton.setAttribute("data-id", itemID);
  } else if (event.target.id.trim() === "save") {
    event.preventDefault();
    editProduct(saveButton.dataset.id, itemDataList, editForm, "save");
  }
  renderUI(itemDataList, productContainer, "edit");
});

addInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addItemData(addInForm, itemDataList);
  renderUI(itemDataList, productContainer, "edit");
});
