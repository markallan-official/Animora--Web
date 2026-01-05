// ===============================
// CANVAS SETUP
// ===============================
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
saveHistory();

let drawing = false;
let currentTool = "pen";
let history = [];
let redoStack = [];

// ===============================
// DRAWING LOGIC
// ===============================
function startDraw(e) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!drawing) return;

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (currentTool === "eraser") {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 20;
  } else {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = document.getElementById("colorPicker").value;
    ctx.lineWidth = 3;
  }

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

function stopDraw() {
  if (!drawing) return;
  drawing = false;
  ctx.beginPath();
  ctx.globalCompositeOperation = "source-over";
  saveHistory();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

// ===============================
// HISTORY (UNDO / REDO)
// ===============================
function saveHistory() {
  history.push(canvas.toDataURL());
  if (history.length > 30) history.shift();
  redoStack = [];
}

function undo() {
  if (history.length <= 1) return;

  redoStack.push(history.pop());
  restoreCanvas(history[history.length - 1]);
}


function redo() {
  if (redoStack.length === 0) return;
  const data = redoStack.pop();
  history.push(data);
  restoreCanvas(data);
}

function restoreCanvas(data) {
  const img = new Image();
  img.src = data;
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };
}

// ===============================
// TOOL BUTTONS
// ===============================
document.getElementById("penBtn").onclick = () => currentTool = "pen";
document.getElementById("eraserBtn").onclick = () => currentTool = "eraser";
document.getElementById("clear").onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  saveHistory();
};

// ===============================
// UPLOAD ARTWORK (NO DUPLICATES)
// ===============================
const uploadButton = document.getElementById("uploadButton");
const fileInput = document.getElementById("fileInput");
const previewContainer = document.getElementById("previewContainer");
const previewImage = document.getElementById("previewImage");
const aiSection = document.getElementById("aiSection");

uploadButton.addEventListener("click", () => {
  fileInput.value = "";
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    previewImage.src = reader.result;
    previewContainer.style.display = "block";
    aiSection.style.display = "block";
    generateAIResults();
  };
  reader.readAsDataURL(file);
});

// ===============================
// AI PLACEHOLDER CONTENT
// ===============================
function generateAIResults() {
  document.getElementById("feedbackList").innerHTML = `
    <li>Strong composition and balance</li>
    <li>Clear focal point</li>
    <li>Good contrast and depth</li>
    <li>Animation-ready framing</li>
    <li>Consistent visual style</li>
    <li>Great potential for storytelling</li>
  `;

  document.getElementById("mainCaption").innerText =
    "Exploring motion, emotion, and creativity through art and animation.";

  document.getElementById("hashtags").innerHTML = `
    <span>#Animora</span>
    <span>#DigitalArt</span>
    <span>#Animation</span>
    <span>#AIForArtists</span>
    <span>#CreativeTech</span>
  `;

  document.getElementById("ideaList").innerHTML = `
    <li>Turn this into a short animation loop</li>
    <li>Create a character backstory</li>
    <li>Design a motion poster</li>
    <li>Build a storyboard from this scene</li>
  `;

  document.getElementById("trendList").innerHTML = `
    <div>Animated reels perform best on Instagram</div>
    <div>Short-form animation trending on TikTok</div>
    <div>Concept art gaining traction on YouTube</div>
  `;
}

// ===============================
// OFFLINE STATUS
// ===============================
const offlineStatus = document.getElementById("offlineStatus");

function updateOnlineStatus() {
  offlineStatus.style.display = navigator.onLine ? "none" : "block";
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
updateOnlineStatus();

