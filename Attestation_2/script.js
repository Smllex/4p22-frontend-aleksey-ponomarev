"use strict";

//const email = document.getElementById("addemail").value;
const pass = document.getElementById("addpassword");
const pass2 = document.getElementById("addpassword2");

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.getElementById("addemail");

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function registration() {
  if (isEmailValid(email.value)) {
    console.log("Емаил указан корректно");
    out1.innerText = "Емаил указан корректно";
    email.style.borderColor = "#787878";
    out1.style.color = "#787878";
  } else {
    email.style.borderColor = "red";
    out1.style.color = "red";
    out1.innerText = "Емаил указан не корректно";
    return;
  }

  if (pass.value.length < 8) {
    pass.style.borderColor = "red";
    out2.style.color = "red";
    out2.innerText = "Слишком короткий пароль";
    console.log("Слишком короткий пароль");
    return;
  } else {
    pass.style.borderColor = "#787878";
    out2.style.color = "#787878";
    out2.innerText = "Пароль указан корректно";
    console.log("Пароль указан корректно");
  }

  if (pass.value === pass2.value) {
    out3.innerText = "Пароли совпадают";
    console.log("Пароли совпадают");
    pass2.style.borderColor = "#787878";
    out3.style.color = "#787878";
  } else {
    pass2.style.borderColor = "red";
    out3.style.color = "red";
    out3.innerText = "Пароли НЕ совпадают";
    console.log("Пароли НЕ совпадают");
    return;
  }
}

//function validateEmail(email) {
//  const re =
//    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  return re.test(String(email).toLowerCase());
//}
