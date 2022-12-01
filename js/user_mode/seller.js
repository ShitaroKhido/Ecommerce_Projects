// SELLER SIDE FUNCTION-----------------------------------
const activateSellerMode = (container) => {
  // Creating element for the seller options template:
  //////////////////////////////////////////////
  // Create edit item form for seller options.//
  //////////////////////////////////////////////
  const editBoxContainer = document.createElement("div");
  const editItemForm = document.createElement("form");
  const editFormTitle = document.createElement("legend");
  const editName = document.createElement("input");
  const editDescription = document.createElement("input");
  const editImgURL = document.createElement("input");
  const editPrice = document.createElement("input");
  const saveButton = document.createElement("button");
  const editCurrency = document.createElement("select");
  const editCurrencyOptoOne = document.createElement("option");
  const editCurrencyOptTwo = document.createElement("option");
  // Set class for each element of edit option:
  editBoxContainer.classList.add("edit-box");
  editCurrency.classList.add("btn", "btn-primary");
  saveButton.classList.add("btn", "btn-primary");
  saveButton.id = "saveEdit";
  editItemForm.id = "edit-item";
  // Set attribute for each element of edit option:
  editName.setAttribute("name", "productName");
  editDescription.setAttribute("name", "productDescription");
  editImgURL.setAttribute("name", "productImgURL");
  editPrice.setAttribute("name", "productPrice");
  editCurrency.setAttribute("name", "currency");
  // Placeholder attribute:
  editName.setAttribute("placeholder", "Name");
  editDescription.setAttribute("placeholder", "Description");
  editImgURL.setAttribute("placeholder", "Images");
  editPrice.setAttribute("placeholder", "Price");
  // Type attribute:
  editName.setAttribute("type", "text");
  editDescription.setAttribute("type", "text");
  editImgURL.setAttribute("type", "url");
  editPrice.setAttribute("type", "number");
  // Value attribute:
  editCurrencyOptoOne.setAttribute("value", "riels");
  editCurrencyOptTwo.setAttribute("value", "dollars");
  // Set content for each edit element of edit option:
  editCurrencyOptoOne.textContent = "Riels";
  editCurrencyOptTwo.textContent = "Dollars";
  editFormTitle.textContent = "Editing product";
  saveButton.textContent = "SAVE";
  editBoxContainer.style.display = "none";
  // Appending edit option element:
  editCurrency.append(editCurrencyOptoOne, editCurrencyOptTwo);
  editItemForm.append(
    editFormTitle,
    editName,
    editDescription,
    editImgURL,
    editPrice,
    editCurrency,
    saveButton
  );
  // Adding edit item element in to edit-box container:
  editBoxContainer.append(editItemForm);

  //////////////////////////////////////////////////////////////////////
  // Creating add item forms and options container for seller options://                        //
  //////////////////////////////////////////////////////////////////////
  const optionsContainer = document.createElement("div");
  const addItemForm = document.createElement("form");
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
  addItemForm.classList.add("add-product");
  currency.classList.add("btn", "btn-primary");
  addItemButton.classList.add("btn", "btn-primary");
  // Set the attribute to needed element:
  inputDescriptoin.setAttribute("name", "productDescription");
  inputName.setAttribute("name", "productName");
  inputImgURL.setAttribute("name", "productImgURL");
  inputPrice.setAttribute("name", "productPrice");
  currency.setAttribute("name", "currency");
  // Set values attribute:
  currencyOptOne.setAttribute("value", "riels");
  currencyOptTwo.setAttribute("value", "dollars");
  // Set placeholder attribute:
  inputDescriptoin.setAttribute("placeholder", "Desscription");
  inputName.setAttribute("placeholder", "Name");
  inputImgURL.setAttribute("placeholder", "Images URL links");
  inputPrice.setAttribute("placeholder", "Price");
  // Set type attribute
  inputDescriptoin.setAttribute("type", "text");
  inputName.setAttribute("type", "text");
  inputImgURL.setAttribute("type", "url");
  inputPrice.setAttribute("type", "number");
  addItemButton.setAttribute("type", "submit");
  // Set texts content to needed element:
  formTitle.textContent = "Add product";
  addItemButton.textContent = "ADD ITEM";
  currencyOptOne.textContent = "Riels";
  currencyOptTwo.textContent = "Dollars";
  // Appending Elements:
  currency.append(currencyOptOne, currencyOptTwo);
  addItemForm.append(
    formTitle,
    inputName,
    inputDescriptoin,
    inputImgURL,
    inputPrice,
    currency,
    addItemButton
  );
  // Adding add item element in to options container:
  optionsContainer.append(addItemForm);

  // Adding to main container:
  container.prepend(optionsContainer, editBoxContainer);

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
const saveButton = document.querySelector("#saveEdit");
const addInForm = document.querySelector(".add-product");
const editForm = document.querySelector("#edit-item");

// EVENT LISTENER
// Bind click event with main conatainer:
mainContainer.addEventListener("click", (event) => {
  event.preventDefault();
  // Get the ID of card if clicked at it:
  let itemID = event.target.parentElement.parentElement.id;
  // Check which element is being clicked:
  if (event.target.id === "removeItem") {
    // If has ID remove, remove card:
    removeItemData(itemID, itemDataList);
  } else if (event.target.textContent.trim() === "EDIT") {
    // If has content of the word EDIT:
    editProduct(itemID, itemDataList, editForm, "load");
    saveButton.setAttribute("data-id", itemID);
  } else if (event.target.id.trim() === "saveEdit") {
    // If has content of the id save:
    editProduct(saveButton.dataset.id, itemDataList, editForm, "save");
  }
  renderUI(itemDataList, productContainer, "edit");
});

// Bind submit event with add item form:
addInForm.addEventListener("click", (event) => {
  event.preventDefault();
  // Check if click on add item:
  if (event.target.textContent.trim() === "ADD ITEM") {
    // if true add data to list and render to UI:
    addItemData(addInForm, itemDataList);
    renderUI(itemDataList, productContainer, "edit");
  }
});
