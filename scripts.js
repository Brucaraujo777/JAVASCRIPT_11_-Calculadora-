function adCharacter(character) {
  //console.log("A função foi chamada!");
  //alert("A função foi chamada!");

  const displayValue = document.querySelector(".display").value;

  //console.log(character)

  document.querySelector(".display").value = displayValue + character;
}

function cleanDisplay() {
  document.querySelector(".display").value = "";
}

function calculate(params) {
  const displayValue = document.querySelector(".display").value;

  document.querySelector(".display").value = eval(displayValue);
}

function invertSignNumber() {
  const displayValue = document.querySelector(".display").value;

  document.querySelector(".display").value = displayValue * -1;
}
