// SELLER SIDE FUNCTION-----------------------------------
const addItemData = (form, dataList) => {
  // Querying input values by using name attribute in form element:
  let item = {};
  // Assign data to each objects instance:
  item.name = form.name.value;
  item.description = form.description.value;
  item.img = form.img.value;
  item.rate = 0;
  item.price = form.price.value;
  item.currency = form.currency.value;
  item.id = idGenerator();
  // Append item object to data list:
  dataList.push(item);
};

const removeItemData = (itemID, dataList) => {
  // Loop through list of data:
  dataList.forEeach((item) => {
    // Check for matches ID of the item, else return message:
    if (item.id === itemID) {
      delete item;
    } else {
      alert("This item is not in ours database!");
    }
  });
};
// MAIN CODE-----------------------------------------------
const addInForm = document.querySelector("");
