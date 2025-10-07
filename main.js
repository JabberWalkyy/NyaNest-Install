const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      sandbox: false,
    },
    icon: path.join(__dirname, 'assets', 'WETPaw.ico') // ← your custom icon path
  });

  mainWindow.loadFile('index.html');

  // 🐱 Add context menu to main window
  mainWindow.webContents.on('context-menu', (event, params) => {
    const menu = Menu.buildFromTemplate([
      { label: 'Clone', role: 'copy', enabled: params.editFlags.canCopy },
      { label: 'Steal', role: 'cut', enabled: params.editFlags.canCut },
      { label: 'Give', role: 'paste', enabled: params.editFlags.canPaste },
      { type: 'separator' },
      { label: 'Select', role: 'selectAll' },
    ]);
    menu.popup();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
