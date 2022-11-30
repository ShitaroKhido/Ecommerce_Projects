// SELLER SIDE FUNCTION-----------------------------------
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
  } else{
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
const addInForm = document.querySelector(".add-product");

document.addEventListener("click", (event) => {
  if (event.target.id === "removeItem") {
    let itemID = event.target.parentElement.parentElement.id;
    // console.log(itemID)
    removeItemData(itemID, item);
    renderUI(item, a, "edit");
  }
});

addInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addItemData(addInForm, item);
  renderUI(item, a, "edit");
});
