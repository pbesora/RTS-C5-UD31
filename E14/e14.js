let decimals = false;
let positive = true;
let secondValue = false;

resetInput();

function updateInput(text) {
  let input = document.getElementById("input");
  input.value = input.value + text;

  if (positive) {
    if (input.value.charAt(0) === "-") {
      input.value = input.value.substring(1);
    }
  } else if (input.value.charAt(0) != "-") {
    input.value = "-" + input.value;
  }
}

function resetInput() {
  let input = document.getElementById("input");
  input.value = "0";
  decimals = false;
  positive = true;
}

function updateHistory(text) {
  let history = document.getElementById("history");
  history.innerText = text;
}

function resetHistory() {
  let history = document.getElementById("history");
  history.innerHTML = "&nbsp;";
}

function dec() {
  if (!decimals) {
    updateInput(".");
    decimals = true;
  }
}

function cButton() {
  resetInput();
  resetHistory();
}

function ceButton() {
  resetInput();
}

function deleteButton() {
  let input = document.getElementById("input");
  if (input.value.charAt(input.value.length - 1) === ".") {
    decimals = false;
  }
  input.value = input.value.slice(0, -1);
}

function sign() {
  if (input.value != "") {
    if (positive) {
      positive = false;
    } else {
      positive = true;
    }
    updateInput("");
  }
}

function numClick(num) {
  let input = document.getElementById("input");
  if (!(num === 0 && input.value == "0")) {
    if (secondValue) {
      resetInput();
      secondValue = false;
    }
    if (input.value == "0") {
      input.value = num;
    } else {
      updateInput(num);
    }
  }
}

function equals() {
  let num1 = +document.getElementById("history").innerText.slice(0, -2);
  let num2 = +document.getElementById("input").value;
  let op = document.getElementById("history").innerText.split(" ").pop();

  switch (op) {
    case "+":
      document.getElementById("input").value = num1 + num2;
      break;
    case "-":
      document.getElementById("input").value = num1 - num2;
      break;
    case "*":
      document.getElementById("input").value = num1 * num2;
      break;
    case "/":
      document.getElementById("input").value = num1 / num2;
      break;
    case "%":
      document.getElementById("input").value = num1 % num2;
      break;
    default:
      break;
  }
}

function basicOp(sign) {
  let input = document.getElementById("input");

  updateHistory(input.value + " " + sign);
  secondValue = true;
}

function sqrRoot() {
  let input = document.getElementById("input");
  updateHistory("Raiz2(" + input.value + ")");
  input.value = Math.sqrt(input.value);
  secondValue = true;
}

function inv() {
  let input = document.getElementById("input");
  if (input.value != 0) {
    updateHistory("1/(" + input.value + ")");
    input.value = 1 / input.value;
    secondValue = true;
  }
}
