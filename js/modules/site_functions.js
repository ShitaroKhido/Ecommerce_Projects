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
const saveToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

const loadFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const renderUI = (container = null, dataList = [], mode = "") => {
  if (mode.trim() === "edit" || mode.trim() === "sell") {
    const productContainer = productViewsContainer(container);
    dataList.forEach((item) => {
      productCard(item, mode, productContainer);
    });
  } else if (mode.trim() === "search") {
    let searchResult = [];
    deploySearchBox(container, searchResult, "body");
  }
};

const createProduct = (dataList, form) => {
      dataList.name = form.name;
      dataList.description = form.description;
      dataList.categorie = form.categorie;
      dataList.rate = null;
      dataList.views = null;
      dataList.img = form.img;
      dataList.country = form.country;
      dataList.price = form.price;
      dataList.currency = form.currency;
      dataList.id = null;
      saveToLocalStorage("productDataList", dataList);
}
const editProduct = (dataList, form) => {
    form.name = dataList.name
    form.description = dataList.description
    form.categorie = dataList.categorie
    form.img = dataList.img
    form.country = dataList.country
    form.price = dataList.price
    form.currency = dataList.currency
  saveToLocalStorage("productDataList", dataList);
}
// MAIN CODE-----------------------------------------
// saveToLocalStorage("productDataList", data)
const productDataList = loadFromLocalStorage("productDataList")
// Rendering UI:
const mainContainer = document.querySelector(".container");
const navSearchContainer = document.querySelector("#nav-search");
renderUI(mainContainer, productDataList, "search");
// Deploy search box to navivation bar:
productViewsContainer(mainContainer, productDataList, "edit")


// Export
export {
  editProduct,
  createProduct
};