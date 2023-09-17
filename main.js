const { app, BrowserWindow } = require('electron')


app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 414,
    height: 736,
    icon: './assets/icon.ico',
    resizable: false,
    autoHideMenuBar: true,
    fullscreenable: false
  })

  mainWindow.loadFile('index.html')
})

try {
  require('electron-reloader')(module)
} catch (_) {}