// FUNCTIONS-------------------------------------------------------------

const createCard = (item, btnText) => {
    //  Create card by using template strings.
    let title = item.title;
    let price = item.price;
    let description = item.description;
    let imgSrc = item.img;
    let productID = item.id;
    let rate = `<i class="material-icons">star</i>`;
    const card = `
                <div class="card" id="${productID}">
                    <img src="${imgSrc}" alt="" class="card-img">
                    <div class="card-body">
                        <div class="card-text">
                            <span class="title">${title}</span>
                            <span class="description">
                                ${description}
                            </span>
                        </div>
                        <p>Rate: <span class="rate">${rate}</span></p>
                    </div>
                    <div class="card-footer">
                        <p>Price: <span class="price-tag">$ ${price}</span></p>
                        <button class="btn btn-secondary">${btnText}</button>
                    </div>
                </div>
                    `;
    return card;
};

const renderUI = (itemDataList) => {
    // Reder element from data to UI.
    itemDataList.forEach((item) => {
        // Adding element to container.
        cardContainer.innerHTML += createCard(item);
    });
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
