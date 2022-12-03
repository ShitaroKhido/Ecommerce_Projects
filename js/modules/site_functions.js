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
  if (mode === "edit" || mode === "sell") {
    const productContainer = productViewsContainer(container, mode);
    if (mode === "edit") {
      editForm = productForm("edit", container);
      addForm = productForm("add", container);
      hideElement(editForm);
      hideElement(addForm);
    }
    if (mode === "sell") {
      userCart = cartBox(container, "cart");
      hideElement(userCart);
    }
    dataList.forEach((item) => {
      productCard(item, mode, productContainer.querySelector(".product"));
    });
  } else if (mode === "search") {
    let searchResult = [];
    deploySearchBox(container, searchResult, "body");
  }
};
// CREATE PRODUCT Data function"
const createProduct = (container, dataList, form) => {
  let data = {};
  console.log(form);
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
  renderUI(container, dataList, "edit");
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
  console.log("....", id);
  dataList.forEach((data) => {
    if (data.id === id) {
      console.log("....");
      data.name = form.name.value;
      data.description = form.description.value;
      data.categories = form.categories.value;
      data.img = form.image.value;
      data.country = form.country.value;
      data.price = Number(form.price.value);
      data.currency = form.currency.value;
    }
    // mainContainer.innerHTML = "";
    renderUI(container, productDataList, "edit");
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
  let digit = Date.now();
  return digit.toString(36);
};

const addToCart = (id, cartList, productDataList) => {
  cartCount = cartList.lenght;
  productDataList.forEach((item) => {
    if (id === item.id) {
      cartList.push(item);
      console.log(item);
    }
  });
};

const removeFromCart = (cartList, id) => {
  cartList.forEach((item) => {
    if (id = item.id) {
      cartList.pop(item);
    }
  });
};

const countViews = (itme) => itme.views++;

const toggleDisplay = (element, displayType) => {
  if (element.style.display == "none") {
    showElement(element, displayType);
  } else {
    hideElement(element);
  }
};

const refreshCart = (cartList, cartContainer) => {
  // This code function is for cart refreching fix, which is need to be injected.
  cartContainer.innerHTML = ""
  
  cartList.forEach(item=>{
    boxItemCard(item, cartContainer, "cart");
  })
};
// MAIN CODE-----------------------------------------
// saveToLocalStorage("productDataList", data)
const productDataList = loadFromLocalStorage("productDataList");
const container = document.querySelector(".container");
let usermode = "sell";
let editForm = null;
let addForm = null;
let cartCount = 0;
let cartList = [];
let userCart = null;
let productID = null;
if (usermode === "edit") {
  renderUI(container, productDataList, "edit");
  container.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    let targetID = event.target.parentElement.parentElement.id;
    console.log(event.target);
    if (event.target.id === "add") {
      showElement(addForm, "flex");
    } else if (event.target.id === "add-product") {
      createProduct(container, productDataList, addForm.querySelector("form"));
    } else if (
      event.target.id === "add-product" ||
      event.target.textContent === "CANCEL"
    ) {
      hideElement(addForm);
      hideElement(editForm);
    } else if (event.target.id === "edit-product") {
      showElement(editForm, "flex");
      editProduct(targetID, productDataList, editForm.querySelector("form"));
    } else if (event.target.id === "delete-product") {
      deleteProduct(productDataList, targetID, container);
    }
  });
} else if ((usermode = "buy")) {
  renderUI(container, productDataList, "sell");
  const cartContainer = document.querySelector(".cart-container .cart");
  document.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    let targetID = event.target.parentElement.parentElement.id;
    console.log(event.target);
    if (event.target.id === "details") {
      productDataList.forEach((item) => {
        if (targetID === item.id) {
          productDetails(item, container);
          countViews(item);
          saveToLocalStorage("productDataList", productDataList);
        }
      });
      productID = targetID;
    } else if (
      event.target.id === "cancel-detail" ||
      event.target.id === "product-details-container"
    ) {
      document.querySelector("#product-details-container").remove();
    } else if (event.target.id === "add-to-cart") {
      console.log(productID);
      addToCart(productID, cartList, productDataList);
      renderUI(container, productDataList, "sell");
      console.log(cartList);
    } else if (event.target.id === "buy-product") {
      console.log(targetID)
      addToCart(targetID, cartList, productDataList);
      refreshCart(cartList, cartContainer);
    } else if (event.target.id === "cart") {
      toggleDisplay(userCart, "block");
      // Dues to the cartBox function that needed to be called everytime to display:
      // This code below could help patch and refresh the the list of cart item
      console.log(cartContainer)
      refreshCart(cartList, cartContainer);
    } else if (event.target.id === "remove-cart-item") {
      console.log(event.target.parentElement.id);
      refreshCart(cartList, cartContainer);
      removeFromCart(cartList, event.target.parentElement.id);
      console.log(cartList);
    }
  });
  console.log("added");
}
