const btn = document.getElementById("btn");
const heading = document.querySelector("h1");

btn.addEventListener("click", () => {
  heading.innerHTML = "Button Clicked";
});
