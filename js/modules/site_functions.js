// MAIN FUNTION FILE

import { createForm, creatCheckout, createCard } from "./views_template.js";
import { data } from "./data_structure.js";

// IMPORT-------------------------------------
// FUNTION-------------------------------------
const saveToLocalStorage = (key = String, data) => {
  // LOAD DATA FROM BROWSER LOCAL STORAGE
  return localStorage.setItem(key, JSON.stringify(data));
};
const loadFromLocalStorage = (key = String) => {
  // LOAD DATA FROM BROWSER LOCAL STORAGE
  return JSON.parse(localStorage.getItem(key));
};
const deleteProduct = (productDataList = Array, productId) => {
  productDataList.forEach((item, index) => {
    console.log(productId);
    if (item.id === productId) {
      productDataList.pop([index])
      saveToLocalStorage("productDataList", productDataList)
      renderUI(productDataList,"editor")
    }
  });
  
};
const createProduct = (productDataList = Array, form) => {
  // CREATE PRODUCT DATA AND APPEND IT TO DATA LIST:
  let newData = {};
  newData.name = form.name.value;
  newData.description = form.description.value;
  newData.price = form.price.value;
  newData.categories = form.categories.value;
  newData.country = form.country.value;
  newData.img = form.img.value;
  newData.id = idGenerator();
  newData.rate = 0;
  newData.views = 0;
  newData.currency = form.currency.value;
  productDataList.push(newData);
  console.log(productDataList);
  saveToLocalStorage("productDataList", productDataList);
  renderUI(productDataList, userMode[1]);
};
const saveProductInfo = (productId, productDataList = Array, form) => {
  // SAVE USER DATA FROM EDIT FOMRS TO DATA LIST:
  productDataList.forEach((item) => {
    if (item.id === productId) {
      item.name = form.name.value;
      item.description = form.description.value;
      item.price = form.price.value;
      item.categories = form.categories.value;
      item.country = form.country.value;
      item.currency = form.currency.value;
      console.log(item);
      saveToLocalStorage("productDataList", productDataList);
      renderUI(productDataList, userMode[1]);
    }
  });
  renderUI(productDataList, userMode[1]);
};
const getProdudtInfo = (productId, productDataList = Array, form) => {
  // GET USER DATA FROM DATA LIST TO DISPLAY ON EDIT FORMS:
  productDataList.forEach((item) => {
    if (item.id === productId) {
      form.name.value = item.name;
      form.description.value = item.description;
      form.price.value = item.price;
      form.categories.value = item.categories;
      form.country.value = item.country;
      form.currency.value = item.currency;
    }
  });
};
const renderUI = (productDataList = Array, userMode = String) => {
  // REDERING CONTENT TO UI BASE ONE USER TYPE SELECTION:
  cardContainer.innerHTML = "";
  productDataList.forEach((item) => {
    if (userMode === "customer") {
      cardContainer.appendChild(createCard(item, ["BUY", "Details"], userMode));
    } else if (userMode === "editor") {
      cardContainer.appendChild(createCard(item, ["EDIT", "DELETE"], userMode));
    }
  });
};
const idGenerator = () => Date.now().toString(36);
const addTocart = () => {};
const removeFromCart = () => {};
const hideElement = (element = Node) => {
  element.style.display = "none";
};
const showElement = (element = Node, displayType = String) => {
  element.style.display = displayType;
};
const toggleDisplay = (element, displayType = "flex") => {
  // THIS FUNCTION USE TO TOGGLE THE DISPLAY STYLE OF ELEMENT:
  if (element.style.display === "none") {
    showElement(element, displayType);
  } else {
    hideElement(element);
  }
};

// NOTE: Main data key for this site is productDataList.
// To load data to local storage, use this function:
// saveToLocalStorage("productDataList", data)

// MAIN CODE-----------------------------------

// CONSTANTS
const container = document.querySelector(".container");
const cardContainer = document.querySelector(".card-container");
// VARIABLES
let productDataList = loadFromLocalStorage("productDataList");
let userMode = ["customer", "editor"];
let input = 2;
// RENDERING UI:
// Rendering user interface to browser
if (input === 1) {
  renderUI(productDataList, userMode[1]);
  // Append needed form for editor user to main container:
  container.append(createForm("edit"), createForm("add"));
  const editProductFormContainer = document.querySelector(
    "#edit-form-container"
  );
  const addProductFormContainer = document.querySelector("#add-form-container");
  // Hide the form container after append to container
  hideElement(editProductFormContainer);
  hideElement(addProductFormContainer);
  const editForm = editProductFormContainer.querySelector(".edit-form");
  const addForm = addProductFormContainer.querySelector(".add-form");
  //Add create product to container:
  const creatButton = document.createElement("button");
  creatButton.classList.add("btn", "btn-primary");
  creatButton.textContent = "CLICK HERE TO ADD NEW PRODUCT";
  creatButton.id = "add-product-button";
  container.prepend(creatButton);
  // Target id to capture the parent target of a targeted node:
  let targetId = null;
  container.addEventListener("click", (event) => {
    // Prevent event bulbbling and default browser action:
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    if (event.target.id === "edit-card") {
      console.log("TEST", targetId);
      targetId = event.target.parentElement.parentElement.id;
      getProdudtInfo(targetId, productDataList, editForm);
      toggleDisplay(editProductFormContainer);
    } else if (event.target.id === creatButton.id) {
      toggleDisplay(addProductFormContainer);
    } else if (event.target.id === "delete-card") {
      targetId = event.target.parentElement.parentElement.id;
      deleteProduct(productDataList, targetId);
    }
  });
  editProductFormContainer.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.textContent === "CONFIRMS") {
      saveProductInfo(targetId, productDataList, editForm);
      toggleDisplay(editProductFormContainer);
    } else if (event.target.textContent === "CANCEL") {
      toggleDisplay(editProductFormContainer);
    }
  });

  addProductFormContainer.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    if (event.target.textContent === "CONFIRMS") {
      createProduct(productDataList, addForm);
      toggleDisplay(addProductFormContainer);
    } else if (
      event.target.textContent === "CANCEL" ||
      event.target.id === "add-form-container"
    ) {
      toggleDisplay(addProductFormContainer);
    }
  });
} else if(input === 2){
  renderUI(productDataList, "customer")
  const checkoutViews = creatCheckout("checkout", productDataList[0]);
  container.appendChild(checkoutViews);
  container.addEventListener("click", (event) => {
    // Prevent event bulbbling and default browser action:
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target);
    if (event.target.id === "buy-card") {
      
    } else if (event.target.id === "details-card") {
    } 
  });
}