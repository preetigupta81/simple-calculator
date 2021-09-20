var input_box = document.getElementById("calculation");
var expressionData = "";
var resultData = "";
input_box.onkeydown = function () {
  console.log(input_box.value);
};

function UserClickButton(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function CalculateValue() {
  console.log("Click");
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  resultData = "";
  expressionData = "";
  input_box.value = result;
}
function ClearData() {
  input_box.value = "";
}
