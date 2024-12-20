console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();

  const newToast = document.createElement("li");
  toastContainer.append(newToast);
  newToast.classList.add("toast-container__message");
  newToast.textContent = "another toast";
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();
  toastContainer.remove();
  location.reload();
});
