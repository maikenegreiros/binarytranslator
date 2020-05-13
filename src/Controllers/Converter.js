import { binaryToText, textToBinary } from "../Models/BinaryConverter.js";

window.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);
  const form = $(".form");
  const textBox = $(".text-box");
  const toTextRadio = $("#to-text");
  const toBinaryRadio = $("#to-binary");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    convert(new FormData(form));
  });

  textBox.addEventListener("keyup", () => {
    convert(new FormData(form));
  });

  function convert(data) {
    let output;
    const convertTo = data.get("convert-to");
    const content = data.get("text");
    if (convertTo === "Binary") {
      output = textToBinary(content);
    } else {
      output = binaryToText(content);
    }

    $(".output-container").innerHTML = `<p>${output}</p>`;
  }
});
