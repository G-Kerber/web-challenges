console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 0;

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let stars = 1; stars <= 5; stars++) {
    const img = document.createElement("img");
    img.addEventListener("click", () => {
      filledStars = stars;
      console.log("hallo");
      console.log(filledStars);
      console.log(stars);
    });
    console.log(filledStars);
    console.log(stars);
    starContainer.append(img);
    if (filledStars >= stars) {
      img.setAttribute("src", "assets/star-filled.svg");
    } else {
      img.setAttribute("src", "assets/star-empty.svg");
    }
  }
  // --^-- write or modify code above this line --^--
}

renderStars(filledStars);
