function redirectTo() {
  window.location.href = "https://www.youtube.com/watch?v=orWnzqBA63w";
}

function moveNoButton() {
  const button = document.querySelector("#no");
  const newX = Math.random() * (window.innerWidth - button.offsetWidth);
  const newY = Math.random() * (window.innerHeight - button.offsetHeight);

  button.style.transition = "left 0.5s, top 0.5s";
  button.style.left = newX + "px";
  button.style.top = newY + "px";
}

document.addEventListener("touchstart", moveNoButton);

function musicPlay() {
  document.getElementById("ID").play();
  document.removeEventListener("click", musicPlay);
}

document.addEventListener("click", musicPlay);
