"use strict";

function calculate() {
  const num1 = document.getElementById("num1").value.trim();
  const num2 = document.getElementById("num2").value.trim();
  const znak = document.getElementById("znak").value.trim();
  let summa;

  if (num1 === "") {
    out.innerText = "Не указано 1-е число";
    console.log("Не указано 1-е число");
    return;
  }

  if (isNaN(num1) === true) {
    out.innerText = "1-е число указано не корректно";
    console.log("1-е число указано не корректно");
    return;
  }

  switch (znak) {
    case "":
      out.innerText = "Не указан знак операции";
      console.log("Не указан знак операции");
      return;
    case "+":
      summa = Number(num1) + Number(num2);
      break;
    case "-":
      summa = Number(num1) - Number(num2);
      break;
    case "/":
      summa = Number(num1) / Number(num2);
      break;
    case "*":
      summa = Number(num1) * Number(num2);
      break;
    default:
      out.innerText = "Программа не поддерживает такую операцию";
      console.log("Программа не поддерживает такую операцию");
      return;
  }

  if (num2 === "") {
    out.innerText = "Не указано 2-е число";
    console.log("Не указано 2-е число");
    return;
  }

  if (isNaN(num2) === true) {
    out.innerText = "2-е число указано не корректно";
    console.log("2-е число указано не корректно");
    return;
  }

  if (num2 === "0") {
    out.innerText = "Операция не корректна";
    console.log("Операция не корректна");
    return;
  }

  if (summa === -Infinity || summa === Infinity) {
    out.innerText = "Операция не корректна";
    console.log("Операция не корректна");
    return;
  }

  out.innerText = summa;
  console.log(summa);
}
