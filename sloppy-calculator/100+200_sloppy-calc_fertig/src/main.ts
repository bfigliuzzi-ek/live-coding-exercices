import "./style.css";

const operationP = document.querySelector<HTMLParagraphElement>("#operation")!;
const resultP = document.querySelector<HTMLParagraphElement>("#result")!;

document.querySelectorAll<HTMLButtonElement>("button")!.forEach((btn) => {
  btn.onclick = () => {
    if (btn.innerText === "=") {
      const result = eval(operationP.innerText) as string;

      resultP.innerText = result;
      operationP.innerText = "";
      return;
    }

    operationP.innerText += btn.innerText;
  };
});
