console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const curruntHour Date().getHours()
  switch (curruntHour) {
  case '6-12':
  return "Good morning";
  break;
case "13-18":
  retrun "Good afternoon"
break
case "19-22":
  return "Godd evening"
break;
case "23-5":
  return "Good night"
break;
default: return "Good day"}
}

function getDayColor() {
  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
