const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "#000";
let history = [];
let redoStack = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function saveState() {
  history.push(canvas.toDataURL());
  redoStack = [];
}

canvas.addEventListener("mousedown", e => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  saveState();
});

canvas.addEventListener("mousemove", e => {
  if (!drawing) return;
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = 3;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => drawing = false);

document.getElementById("colorPicker").onchange = e =>
  currentColor = e.target.value;

document.getElementById("undoBtn").onclick = () => {
  if (!history.length) return;
  redoStack.push(history.pop());
  const img = new Image();
  img.src = history.at(-1) || "";
  img.onload = () => ctx.drawImage(img, 0, 0);
};

document.getElementById("redoBtn").onclick = () => {
  if (!redoStack.length) return;
  const img = new Image();
  img.src = redoStack.pop();
  img.onload = () => ctx.drawImage(img, 0, 0);
};

document.getElementById("clear").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  saveState();
};

/* UPLOAD */
const uploadButton = document.getElementById("uploadButton");
const fileInput = document.getElementById("fileInput");
const previewImage = document.getElementById("previewImage");

uploadButton.onclick = () => fileInput.click();

fileInput.onchange = () => {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
    generateAI();
  };
  reader.readAsDataURL(file);
  fileInput.value = "";
};

function generateAI() {
  document.getElementById("feedbackList").innerHTML =
    "<li>Strong composition and clean strokes.</li>";
  document.getElementById("mainCaption").textContent =
    "Every stroke tells a story 🎨";
  document.getElementById("hashtags").textContent =
    "#digitalart #animora #artist";
  document.getElementById("ideaList").innerHTML =
    "<li>Create a character powered by imagination</li>";
  document.getElementById("trendList").textContent =
    "Minimalist line art is trending";
}
/* ===== COMMUNITY FEEDBACK LOGIC ===== */

let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `${likes} likes`;
});

commentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  commentList.prepend(li);

  commentInput.value = "";
});
