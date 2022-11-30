// Redering item data to UI
renderUI(itemData, container);

// Login validation
const loginPopUp = document.querySelector("#login-popup");
const loginForm = document.querySelector(".login");
const userData = JSON.parse(localStorage.userData);

// String template for user mode selection
const modeSelection = `
            <div class="usermode">
            <a href="pages/seller/seller.html" class="btn btn-secondary" style="text-decoration: none;">Sell Mode</a>
            <a href="pages/buyer/buyer.html" class="btn btn-secondary" style="text-decoration: none;">Buy Mode</a>
            </div>
            `;
            
// Validating through eventlistener
loginPopUp.addEventListener("click", (event) => {
  if (event.target.id === "login-popup") {
    hide(loginPopUp);
  } else if (event.target.textContent === "Login") {
    userData.forEach((user) => {
      if (
        loginForm.username.value === user.name &&
        loginForm.password.value === user.pass
      ) {
        hide(loginForm);
        loginPopUp.innerHTML = modeSelection;
      }
    });
  }
});
