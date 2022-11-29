// FUNCTIONS-------------------------------------------------------------

const createCard = (item, btnText) => {
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
                        <p>Price: <span class="price-tag">$ ${item.price}</span></p>
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
    id: null,
  };
  item.name = addForm.itemName.value;
  item.price = addForm.itemPrice.value;
  item.description = addForm.itemDescription.value;
  item.img = addForm.itemImg.value;
  item.id = idGenerator();
  itemDataList.push(item);
};

const renderUI = (itemDataList) => {
  // Reder element from data to UI.
  itemDataList.forEach((item) => {
    // Adding element to container.
    cardContainer.innerHTML += createCard(item);
  });
};

const idGenerator = () => {
  // Generate random UID by using date now in seconds
  // then randomize it and convert to string base36
  let dateNow = Date.now();
  let uid = parseInt(Math.random() * dateNow).toString(36);
  return uid;
};

const show = (element, displayType) => {
  // Display element by type eg.(block, flex...etc)
  element.style.display = displayType;
};

const hide = (element) => {
  // Hide element by change its style to display none.
  element.style.display = "none";
};

// CONST AND VARIABLEs-------------------------------------------------------------
