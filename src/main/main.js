const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron')
const Path = require('path')
const { main } = require('./microphoneStream')
const notifier = require('./notifier.js')
const { phrases } = require('./phrases')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: Path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2]

    mainWindow.loadURL(`http://localhost:${rendererPort}`)
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(Path.join(app.getAppPath(), 'renderer', 'index.html'))
  }

  return mainWindow
}

app.whenReady().then(() => {
  let win = createWindow()

  globalShortcut.register('CommandOrControl+X', () => {
    main()
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      win = createWindow()
    }
  })

  notifier.on('voice', data => {
    const transcription =
      data.results[0].alternatives[0].transcript.toLowerCase()
    // if (phrases.includes(transcription)) {
    //   win.webContents.send('create-clock', transcription)
    // }
    if (transcription === 'mid flash') {
      win.webContents.send('create-clock', transcription)
    }
    if (transcription === 'what is mid flash') {
      win.webContents.send('send-mid-update', transcription)
    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
