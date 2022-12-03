// THIS FILE CONTAINS ALL THE FUNCTION THAT ARE USE FOR MAIN PAGES.
// IMPORTING NEEDED FUNTION AND DATA-----------------
import {
  deploySearchBox,
  productViewsContainer,
  productForm,
  productCard,
  productDetails,
  boxItemCard,
  cartBox,
  checkoutProduct,
  searchMenu,
} from "./views_template.js";
import { data } from "./data_structure.js";
// FUNCTIONS-----------------------------------------
// HIDE and SHOW Element functions:
const hideElement = (element = Node) => (element.style.display = "none");
const showElement = (element = Node, type = String) =>
  (element.style.display = type);
// LOAD and SAVE Data to local storage functions:
const loadFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const saveToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
// RENDER UI Function:
const renderUI = (container = null, dataList = [], mode = "") => {
  container.innerHTML = "";
  if (mode.trim() === "edit" || mode.trim() === "sell") {
    const productContainer = productViewsContainer(container);
    if (mode.trim() === "edit") {
      editContainer = productForm("edit", container);
      addProductContainer = productForm("add", container);
      hideElement(editContainer);
      hideElement(addProductContainer);
    }
    dataList.forEach((item) => {
      productCard(item, mode, productContainer.querySelector(".product"));
    });
  } else if (mode.trim() === "search") {
    let searchResult = [];
    deploySearchBox(container, searchResult, "body");
  }
};
// CREATE PRODUCT Data function"
const createProduct = (container,dataList, form) => {
  let data = {};
  console.log(form)
  data.name = form.name.value;
  data.description = form.description.value;
  data.categorie = form.categories.value;
  data.rate = null;
  data.views = null;
  data.img = form.image.value;
  data.country = form.country.value;
  data.price = form.price.value;
  data.currency = form.currency.value;
  data.id = idGenerator();
  dataList.push(data);
  saveToLocalStorage("productDataList", dataList);
  renderUI(container, dataList, "edit")
};
// EDIT PRODUCT Data funciton:
const editProduct = (id = String, dataList = Array, form) => {
  dataList.forEach((data) => {
    if (data.id === id) {
      form.name.value = data.name;
      form.description.value = data.description;
      form.categories.value = data.categories;
      form.image.value = data.img;
      form.country.value = data.country;
      form.price.value = data.price;
      form.currency.value = data.currency;
    }
  });
};

const saveProduct = (id = String, dataList = Array, form) => {
  
  console.log("...." ,id)
  dataList.forEach((data) => {
    if (data.id === id) {
      console.log("....")
      data.name = form.name.value;
      data.description = form.description.value;
      data.categories = form.categories.value;
      data.img = form.image.value;
      data.country = form.country.value;
      data.price = Number(form.price.value);
      data.currency = form.currency.value;
    }
    // mainContainer.innerHTML = "";
    renderUI(mainContainer, productDataList, "edit");
    return saveToLocalStorage("productDataList", dataList);
  });
};
// DELETE PRODUCT Data funciton:
const deleteProduct = (dataList = Array(), id = String(), container) => {
  console.log(container.querySelector(".product-display"));
  dataList.forEach((item, index) => {
    if (item.id === id) {
      dataList.pop(index);
      saveToLocalStorage("productDataList", dataList);
      renderUI(container, dataList, "edit");
    }
  });
};

const idGenerator = () => {
  // Generate random ID form each second count:
  let digit = Date.now()
  return digit.toString(36);
}
// MAIN CODE-----------------------------------------
// saveToLocalStorage("productDataList", data)
const productDataList = loadFromLocalStorage("productDataList");
let editContainer = null;
let addProductContainer = null;
let editForm = null;
let addForm = null
let productId = null;
// Rendering UI:
const productContainer = document.querySelector(".product-display");
const mainContainer = document.querySelector(".container");
// Get the main navigation bar container:
const navSearchContainer = document.querySelector("#nav-search");
searchMenu(navSearchContainer,"nav")
// Searh result on navigationbar:
const navSearchResult = document.querySelector("#nav-search #nav-search-section");
cartBox(productDataList, navSearchResult, "search")

// EVENT LISTENER FORM THE MAIN CONTAINER:
mainContainer.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  let targetId = event.target.parentElement.parentElement.id;
  console.log("work!!!");
  if (
    event.target.textContent.trim() === "EDIT ITEM" &&
    event.target.parentElement.parentElement.className === "card"
  ) {
    productId = event.target.parentElement.parentElement.id;
    console.log(productId)
    showElement(editContainer, "flex");
    editForm = editContainer.querySelector("#edit-item-form");
    editProduct(targetId, productDataList, editForm);
  } else if (
    event.target.id === "edit-item-container" ||
    event.target.textContent.trim() === "CANCEL" ||
    event.target.textContent.trim() === "SAVE"
  ) {
    if (event.target.id === "edit-product") {
      saveProduct(productId, productDataList, editForm);
    } else {
      hideElement(editContainer);
      hideElement(addProductContainer);
      console.log("CANCEL");
    }
    hideElement(editContainer);
  } else if (event.target.id === "delete-product") {
    deleteProduct(productDataList, targetId, mainContainer);
  } else if (event.target.id === "add") {
    showElement(addProductContainer, "flex")
    addForm = addProductContainer.querySelector("#add-item-form")
    console.log(addForm)
  } 
  else if (event.target.id === "add-product"){
    console.log(event.target.id)
    console.log(addForm)
    createProduct( mainContainer,productDataList, addForm);
  }
});
