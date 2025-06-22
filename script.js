const page = document.querySelector(".page");
const textCursor = document.getElementById("linePosition");

const pageContent = [
  "title",
  "Seeing something unexpected? Take a look at the GitHub profile guide.",
];

textCursor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lineBreak(textCursor.value);
  }
});

function renderPageContent() {
  pageContent.forEach((textLine) => {
    const lineElement = document.createElement("div");
    lineElement.textContent = textLine;
    page.appendChild(lineElement);
  });
}

function focustextCursor() {
  textCursor.focus();
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

  textCursor.value = "";
  page.appendChild(textCursor);
  textCursor.focus();
}

renderPageContent()