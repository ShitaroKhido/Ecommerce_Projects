// FUNCTIONS-------------------------------------------------------------

const createCard = (item, btnText="Buy") => {
  //  Create html card element by using template strings.
  let rate = `<i class="material-icons">star</i>`;
  const card = `
                <div class="card" id="${item.id}">
                    <img src="${item.img}" alt="" class="card-img">
                    <div class="card-body">
                        <div class="card-text">
                            <span class="title">${item.name}</span>
                            <span class="description">
                                ${item.description}
                            </span>
                        </div>
                        <p>Rate: <span class="rate">${rate}</span></p>
                    </div>
                    <div class="card-footer">
                        <p>Price: <span class="price-tag">${item.currency} ${item.price}</span></p>
                        <button class="btn btn-secondary">${btnText}</button>
                    </div>
                </div>
                    `;
  return card;
};

const addItem = (itemDataList) => {
  let item = {
    name: null,
    description: null,
    img: null,
    price: null,
    currency: null,
    id: null,
  };
  if (
    (addForm.itemName.value.trim() &&
      addForm.itemPrice.value.trim() &&
      addForm.itemDescription.value.trim() &&
      addForm.itemImg.value.trim()) !== ""
  ) {
    item.name = addForm.itemName.value.trim();
    item.price = addForm.itemPrice.value.trim();
    item.description = addForm.itemDescription.value.trim();
    item.img = addForm.itemImg.value.trim();
    item.currency = addForm.currency.value.trim()
    item.id = idGenerator();
    itemDataList.push(item);
    console.log(itemDataList);
  }
};

const renderUI = (itemDataList, container, btnText) => {
  // Reder element from data to UI.
  container.innerHTML = "";
  itemDataList.forEach((item) => {
    // Adding element to container.
    container.innerHTML += createCard(item,btnText);
  });
};

const idGenerator = () => {
  // Generate random UID by using date now in seconds
  // then randomize it and convert to string base36
  let dateNow = Date.now();
  let uid = parseInt(Math.random() * dateNow).toString(36);
  return uid;
};

const saveData = (data)=>{
  // Save data to local storage
  localStorage.setItem(`${data}`, JSON.stringify(data));
}

const loadData = (key)=>{
  // Load data from local storage
  localStorage.getItem(key)
}

const show = (element, displayType) => {
  // Display element by type eg.(block, flex...etc)
  element.style.display = displayType;
};

const hide = (element) => {
  // Hide element by change its style to display none.
  element.style.display = "none";
};

// CONST AND VARIABLEs-------------------------------------------------------------
