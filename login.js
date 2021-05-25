const shell = require("shelljs");
var button = document.querySelector(".button-submit .btn");

button.addEventListener("click", function () {
  shell.exec("whoami"); // rafael
});
