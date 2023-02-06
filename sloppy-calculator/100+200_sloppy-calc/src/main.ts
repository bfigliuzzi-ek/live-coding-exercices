import "./style.css";

document.querySelectorAll<HTMLButtonElement>("button")!.forEach((btn) => {
  btn.onclick = () => {
    if (btn.value == "=") {
      eval(
        document.querySelector<HTMLParagraphElement>("#operation")!.innerText
      );
    }

    document.querySelector<HTMLParagraphElement>("#operation")!.innerText +=
      btn.innerText;
  };
});
