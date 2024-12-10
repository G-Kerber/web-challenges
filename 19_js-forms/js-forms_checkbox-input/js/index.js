console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const succesMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMessage() {
  succesMessage.setAttribute("hidden", "");
}
function showSuccessMessage() {
  succesMessage.removeAttribute("hidden");
}

hideTosError();
hideSuccessMessage();

tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked === true) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    showSuccessMessage();
  } else {
    hideSuccessMessage();
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
