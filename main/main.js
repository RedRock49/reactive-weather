const { app, Tray, Menu, nativeImage, BrowserWindow } = require("electron");
const serve = require("electron-serve");
const path = require("path");

const appServe = app.isPackaged
  ? serve({
      directory: path.join(__dirname, "../out"),
    })
  : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });
  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL("app://.");
    });
  } else {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
};

const createWidgetWindow = () => {
  const widget = new BrowserWindow({
    width: 680,
    height: 148,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    frame: false,
    autoHideMenuBar: true,
    skipTaskbar: true,
    resizable: false,
  });
  if (app.isPackaged) {
    appServe(widget).then(() => {
      widget.loadURL("app://./widget.html");
    });
  } else {
    widget.loadURL("http://localhost:3000/widget");
    widget.webContents.on("did-fail-load", (e, code, desc) => {
      widget.webContents.reloadIgnoringCache();
    });
  }
};

app.on("ready", () => {
  createWindow();
  createWidgetWindow();
  const icon = nativeImage.createFromPath(path.join(__dirname, "icon.ico"));

  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    {label: "Показать", click: () =>{
      createWindow();
    }},
    { label: "Выход", click: () => {
      app.quit();
    }},
  ]);

  tray.on('double-click', () => {
    createWindow();
  });

  tray.setToolTip("Reactive Weather");
  tray.setContextMenu(contextMenu);  
});
