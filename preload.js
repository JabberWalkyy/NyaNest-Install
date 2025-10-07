// preload.js
// Keep it minimal and safe. You can expose small, controlled APIs via contextBridge here if needed.
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // put safe functions here if you need them later
});