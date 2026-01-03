const CACHE_NAME = "animora-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js"
];

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
