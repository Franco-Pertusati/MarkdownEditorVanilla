const page = document.querySelector(".page");
const linePosition = document.getElementById("linePosition");

linePosition.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lineBreak(linePosition.value);
  }
});

function focusLinePosition() {
  linePosition.focus();
  event.stopPropagation();
}

function lineBreak(value) {
  const newLine = document.createElement("span");

  if (value.length > 0) {
    newLine.textContent = value;
    page.appendChild(newLine);
  }

  const newBr = document.createElement("br");
  page.appendChild(newBr);

  linePosition.value = "";
  page.appendChild(linePosition);
  linePosition.focus();
}
