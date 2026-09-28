
document.addEventListener("DOMContentLoaded", function () {
  let colors = [
    ["#4b3445 ", " #906a7c"],
    ["#194a7a", "#476f95"], 
    ["#476f95", "#194a7a"], 
    ["#1b7865","#3eb59d"],
    ["#3eb59d","#1b7865"]];
  let randomNumb = Math.floor(Math.random() * colors.length);
  let color = colors[randomNumb];

  let bodyElements = document.getElementsByClassName("body");
  for (let i = 0; i < bodyElements.length; i++) {
      bodyElements[i].style.backgroundColor = color[0];
  }

  let secondColorElements = document.getElementsByClassName("2nd-color");
  for (let i = 0; i < secondColorElements.length; i++) {
      secondColorElements[i].style.backgroundColor = color[1];
  }
});
