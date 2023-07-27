let arr = JSON.parse(localStorage.getItem("users"));
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let login = document.getElementById("login");
let flag = false;
let inCorrect = document.getElementById("inCorrect");
login.addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].userEmail == email.value && arr[i].userPass == pass.value) {
      localStorage.setItem("username", arr[i].username);
      window.location = "home.html";
    } else {
      inCorrect.classList.remove("d-none");
      setTimeout(() => {
        inCorrect.classList.add("d-none");
      }, 5000);
    }
  }
});
