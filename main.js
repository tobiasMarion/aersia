const { app, BrowserWindow } = require('electron')

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform !== 'darwin'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 414,
    height: 736,
    icon: './assets/icon.ico',
    resizable: false,
    autoHideMenuBar: true,
    fullscreenable: false
  })

  if (isDev) mainWindow.webContents.openDevTools()

  mainWindow.loadFile('./renderer/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (isMac) app.quit()
})
