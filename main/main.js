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
      win.loadURL("app://-");
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
    width: 600,
    height: 148,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    frame: false,
    autoHideMenuBar: true,
    movable: true,
    focusable: false,
  });
  if (app.isPackaged) {
    appServe(widget).then(() => {
      widget.loadURL("app://-/widget");
    });
  } else {
    widget.loadURL("http://localhost:3000/widget");
    //widget.webContents.openDevTools();
    widget.webContents.on("did-fail-load", (e, code, desc) => {
      widget.webContents.reloadIgnoringCache();
    });
  }
};

app.on("ready", () => {
  createWindow();
  createWidgetWindow();
  /* const icon = nativeImage.createFromPath("build/icon.ico");
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" },
  ]);

  tray.setToolTip("This is my application");
  tray.setContextMenu(contextMenu); */
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
