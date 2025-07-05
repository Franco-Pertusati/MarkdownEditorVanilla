const page = document.querySelector(".page");
const textCursor = document.getElementById("linePosition");

var currentIndex = 0;

const pageContent = [
  { content: "# Title \n", id: 11 },
  { content: "Una linea sin estilos \n", id: 12 },
  { content: "Una palabra en **negrita** para probar \n", id: 13 },
  { content: "Otra linea sin estilos \n", id: 14 },
];

textCursor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lineBreak();
  }
  if (event.key === "ArrowUp" && currentIndex > 0) {
    currentIndex--;
    const referenceNode = document.getElementById(`line-${pageContent[currentIndex].id}`)
    renderLineById(pageContent[currentIndex].id, referenceNode);
    setCursorAtLine(pageContent[currentIndex].id);
  }
});

function renderAllLines() {
  pageContent.forEach((l) => {
    renderLine(l);
    currentIndex++;
  });
  page.appendChild(textCursor);
  console.log(currentIndex);
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
    createLine(lineContent, true);
  }

  textCursor.value = "";
  page.appendChild(textCursor);
  textCursor.focus();
}

function createLine(lineContent, render) {
  const newLine = {
    content: lineContent,
    id: setId(),
  };
  pageContent.push(newLine);
  if (render) {
    renderLine(newLine);
  }
}

function renderLine(line) {
  const newLine = document.createElement("div");

  newLine.innerHTML = convertToHTML(line.content);
  newLine.id = `line-${line.id}`;

  page.appendChild(newLine);
}

function setCursorAtLine(id) {
  const line = document.getElementById(`line-${id}`);
  line.remove();
  textCursor.value = pageContent[currentIndex].content;
}

function renderLineById(id, referenceNode) {
  console.log(referenceNode)
  if (referenceNode === null) {
    return
  }
  const line = pageContent.find((l) => l.id === id);
  const newLine = document.createElement("div");

  newLine.innerHTML = convertToHTML(line.content);
  newLine.id = `line-${line.id}`;
  page.insertBefore(newLine, referenceNode);
}

function convertToHTML(text) {
  text = text.replace(/^# (.*)/, "<h1>$1</h1>");

  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  if (!/^<h1>/.test(text)) {
    text = `<span>${text}</span>`;
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
