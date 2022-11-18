"use strict";

const user = {};
const form = document.getElementById("form");
const email = document.getElementById("addemail");
const pass = document.getElementById("addpassword");
const pass2 = document.getElementById("addpassword2");
const man = document.getElementById("radio1");
const woman = document.getElementById("radio2");
const text = document.getElementById("textarea");
const check = document.getElementById("addcheck");
const button = document.getElementById("btn");

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value.length === 0) {
    email.style.borderColor = "red";
    out1.innerHTML = "Поле обязательно для заполнения";
  } else if (!validateEmail(email.value)) {
    email.style.borderColor = "red";
    out1.innerHTML = "Емаил введен некорректно";
  } else {
    email.style.borderColor = "#787878";
    out1.innerHTML = "";
  }

  if (pass.value.length === 0) {
    pass.style.borderColor = "red";
    out2.innerHTML = "Поле обязательно для заполнения";
  } else if (pass.value.length < 8) {
    pass.style.borderColor = "red";
    out2.innerHTML = "Пароль должен содержать не менее 8 символов";
  } else {
    pass.style.borderColor = "#787878";
    out2.innerHTML = "";
  }

  if (pass2.value.length === 0 || pass.value !== pass2.value) {
    pass2.style.borderColor = "red";
    out3.innerHTML = "Пароли не совпадают";
  } else {
    pass2.style.borderColor = "#787878";
    out3.innerHTML = "";
  }

  if (man.checked) {
    user.gender = "man";
  } else if (woman.checked) {
    user.gender = "woman";
  }

  if (check.checked) {
    user.check = true;
  } else if (!check.checked) {
    user.check = false;
  }

  if (
    validateEmail(email.value) &&
    pass.value >= 8 &&
    pass2.value === pass.value
  ) {
    user.email = email.value;
    user.pass = pass.value;
    user.pass2 = pass2.value;
    user.pass2 = pass2.value;
    user.text = text.value;
    console.log(user);
  }
});
