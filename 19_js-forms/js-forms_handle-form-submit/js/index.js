console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Object_", data);

  const ageBadnessSum = event.target.badness.value + event.target.age.value;
  console.log(
    "The age-badness-sum of " +
      event.target.firstName.value +
      " is " +
      ageBadnessSum
  );

  event.target.reset();
  event.target.firstName.focus();
});
