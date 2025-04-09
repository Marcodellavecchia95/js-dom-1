const lampOnElement = document.getElementById("lamp-on");
const lampOffElement = document.getElementById("lamp-off");
const onOffButton = document.querySelector(".btn");

console.log(lampOnElement);
console.log(lampOffElement);
console.log(onOffButton);

onOffButton.addEventListener("click", () => {
  // lampOnElement.classList.replace("d-none", "d-block");
  // lampOffElement.classList.replace("d-block", "d-none");

  if (lampOffElement.classList.contains("d-block")) {
    lampOnElement.classList.replace("d-none", "d-block");
    lampOffElement.classList.replace("d-block", "d-none");
    onOffButton.innerHTML = "Spegni";
  } else {
    lampOnElement.classList.replace("d-block", "d-none");
    lampOffElement.classList.replace("d-none", "d-block");
    onOffButton.innerHTML = "Accendi";
  }
});
