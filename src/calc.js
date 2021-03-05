export class Calc {
  constructor() {
    this.buttons = document
      .querySelectorAll(".button")
      .forEach((button) => button.addEventListener("click", () => this[`${button.dataset.type}ClickHandler`](button)));
    this.result = document.querySelector("#result");
    this.activeResult = false;
  }

  numberClickHandler(button) {
    if (this.activeResult) {
      this.result.value = button.value;
      this.activeResult = false;
    } else {
      this.result.value += button.value;
    }
  }

  operatorClickHandler(button) {
    this.result.value !== "" && (this.result.value += button.value);
  }

  zeroClickHandler(button) {
    this.result.value !== "0" && (this.result.value += button.value);
  }

  dotClickHandler() {
    this.result.value === "" ? (this.result.value = "0.") : (this.result.value += ".");
  }

  equalClickHandler() {
    if (this.result.value !== "") {
      this.result.value = eval(this.result.value);
      this.activeResult = true;
    }
  }

  deleteClickHandler() {
    this.result.value = "";
  }
}
