// THIS FILE CONTAINS ALL THE FUNCTION THAT ARE USE FOR MAIN PAGES.
// FUNCTIONS
const saveToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

const loadFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const renderUI = () => {};