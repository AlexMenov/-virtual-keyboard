let display = document.querySelector(".display"),
  clear = document.querySelector(".clear"),
  buttonKey = document.querySelectorAll(".button.key");

for (let element of buttonKey) {
  element.addEventListener("click", () => {
    display.textContent += element.textContent;
  });
}
clear.addEventListener("click", () => {
  display.textContent = "";
});
