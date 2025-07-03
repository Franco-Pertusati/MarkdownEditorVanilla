const page = document.querySelector(".page");
const textCursor = document.getElementById("linePosition");

var currentIndex = 0;

const pageContent = [
  { content: "# Title \n", id: 1 },
  { content: "Una linea sin estilos \n", id: 2 },
  { content: "Una palabra en **negrita** para probar \n", id: 3 },
  { content: "Otra linea sin estilos \n", id: 2 },
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
    content: lineContent,
    id: setId(),
  };
  pageContent.push(newLine);

  renderLine(newLine);
}

function renderLine(line) {
  const newLine = document.createElement("div");

  newLine.innerHTML = convertToHTML(line.content);
  newLine.id = `line-${line.id}`;

  page.appendChild(newLine);
}

function convertToHTML(text) {
  text = text.replace(/^# (.*)/, "<h1>$1</h1>");

  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  if (!/^<h1>/.test(text)) {
    text = `<p>${text}</p>`;
  }

  return text;
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
