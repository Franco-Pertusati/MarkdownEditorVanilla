const page = document.querySelector(".page");
const textCursor = document.getElementById("linePosition");

const pageContent = [
  { type: "title-1-line", content: "Title", id: 1 },
  { type: "regular-text-line", content: "Lorem ipsum wasd pacu tasc.", id: 2 },
];

textCursor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lineBreak();
  }
});

function renderAllLines() {
  page.appendChild(textCursor);
}

function focustextCursor() {
  textCursor.focus();
  event.stopPropagation();
}

function lineBreak() {
  const lineContent = textCursor.value;

  if (!lineContent.length != "") {
    const newBr = document.createElement("br");
    page.appendChild(newBr);
  } else {
    createLine(lineContent);
    renderLine(lineContent);
  }

  textCursor.value = "";
  page.appendChild(textCursor);
  textCursor.focus();
}

function createLine(lineContent) {
  const newLine = {
    type: "regular-text-line",
    content: lineContent,
    id: setId(),
  };
  pageContent.push(newLine);
  console.log(newLine);
}

function renderLine(lineContent) {
  const newLine = document.createElement("div");
  newLine.textContent = lineContent;
  page.appendChild(newLine);
}

function updateLine() {}

function deleteContentLine() {}

function focusOnContentLine(id) {}

function setId() {
  maxId = 0;

  pageContent.forEach((line) => {
    if (line.id > 0) {
      maxId = line.id;
    }
  });

  return maxId + 1;
}

renderAllLines();
