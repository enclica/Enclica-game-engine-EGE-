const { app, BrowserWindow } = require('electron');
const path = require('path');


app.whenReady().then(() => {

    const win = new BrowserWindow({ show: false, width: 1000, height: 600, webPreferences: { preload: path.join(__dirname, 'preload.js') } });
    win.loadFile('pages/index.html');
    win.webContents.on('did-finish-load', function() {
        win.show();
    });

    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) { createWindow() } })
})
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } })