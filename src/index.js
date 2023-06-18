import "./styles.css";
import CustomSet from "./customSet";

const addSetButton = document.getElementById("add-set");
const addSetForm = document.querySelector(".add-set-container > form");
addSetButton.addEventListener("click", () => {
  addSetForm.style.display =
    addSetForm.style.display === "flex" ? "none" : "flex";
});

addSetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".add-set-container > form > input");
  const setName = input.value;
  const setA = new CustomSet(setName);
  input.value = "";
  addSetForm.style.display = "none";
});
