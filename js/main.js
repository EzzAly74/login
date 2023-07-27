let userName = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let alertAll = document.getElementById("alertAll");
let alertEmail = document.getElementById("alertEmail");
let emailExist = document.getElementById("emailExist");
let user = {};
let users = [];

let regex =
  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.getElementById("signup").addEventListener("click", () => {
  user = {
    username: userName.value,
    userEmail: email.value,
    userPass: pass.value,
  };
  if (
    pass.value.length == 0 ||
    userName.value.length == 0 ||
    email.value.length == 0
  ) {
    alertAll.classList.remove("d-none");

    setTimeout(() => {
      alertAll.classList.add("d-none");
    }, 5000);
  }

  if (
    regex.test(email.value) == false &&
    pass.value.length > 0 &&
    userName.value.length > 0
  ) {
    alertEmail.classList.remove("d-none");
    setTimeout(() => {
      alertEmail.classList.add("d-none");
    }, 5000);
  }
  if (
    regex.test(email.value) &&
    pass.value.length > 0 &&
    userName.value.length > 0 &&
    testEmail(email.value)
  ) {
    emailExist.classList.remove("d-none");
    setTimeout(() => {
      emailExist.classList.add("d-none");
    }, 5000);
  }

  if (
    regex.test(email.value) &&
    pass.value.length > 0 &&
    userName.value.length > 0 &&
    testEmail(email.value) == false
  ) {
    if (localStorage.getItem("users") != null)
      users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clear();
    window.location = "index.html";
  }
});
function clear() {
  userName.value = "";
  email.value = "";
  pass.value = "";
}

function testEmail(em) {
  if (localStorage.getItem("users") != null) {
    let arr = JSON.parse(localStorage.getItem("users"));

    for (var i = 0; i < arr.length; i++)
      if (arr[i].userEmail == em) return true;
  }
  return false;
}
