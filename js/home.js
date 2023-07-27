let x = localStorage.getItem("username");

document.querySelector("h1 span").innerHTML = x;
document.getElementById("logout").addEventListener("click", () => {
  window.location = "index.html";
});
