console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Define variables for HTML elements
const newPost = document.createElement("article");
const newPostText = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostUsername = document.createElement("span");
const newPostButton = document.createElement("button");

// add new Post at the body
document.body.append(newPost);
newPost.classList.add("post");

// define new post
newPost.append(newPostText);
newPostText.classList.add("post__content");
newPostText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

newPost.append(newPostFooter);
newPostFooter.classList.add("post__footer");

newPostFooter.append(newPostUsername);
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";

newPostFooter.append(newPostButton);
newPostButton.classList.add("post__button");
newPostButton.setAttribute("type", "button");
newPostButton.setAttribute("data-js", "like-Button");
newPostButton.textContent = "♥ Like";

newPostButton.addEventListener("click", handleLikeButtonClick);
