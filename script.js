const page = document.querySelector(".page");
const textCursor = document.getElementById("linePosition");

var currentIndex = 0;

const pageContent = [
  { style: "title-1-line", content: "## Title", id: 1 },
  { style: "regular-text-line", content: "Lorem ipsum wasd pacu tasc.", id: 2 },
];

textCursor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lineBreak();
  }
  if (event.key === "ArrowUp") {
    moverCursor(1);
  }
});

function moverCursor(value) {
  if (value > 0) {
  }
}

function renderAllLines() {
  pageContent.forEach((l) => {
    renderLine(l);
  });
  page.appendChild(textCursor);
}

function focustextCursor() {
  textCursor.focus();
  event.stopPropagation();
}

function lineBreak() {
  const lineContent = textCursor.value;

  if (lineContent.trim() === "") {
    const newBr = document.createElement("br");
    page.appendChild(newBr);
  } else {
    createLine(lineContent);
  }

  textCursor.value = "";
  page.appendChild(textCursor);
  textCursor.focus();
  currentIndex++;
  console.log(currentIndex);
}

function createLine(lineContent) {
  const newLine = {
    style: "",
    content: lineContent,
    id: setId(),
  };
  pageContent.push(newLine);

  renderLine(newLine);
}

function renderLine(line) {
  const newLine = document.createElement("div");

  line.lineContent = newLine.classList = line.style;
  newLine.textContent = line.content;
  newLine.id = `line-${line.id}`;

  page.appendChild(newLine);
}

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
