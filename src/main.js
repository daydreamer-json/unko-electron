import * as electron from 'electron';

electron.app.once('ready', () => {
  const mainWindow = new electron.BrowserWindow({
    width: 384,
    height: 384,
    title: 'Unko',
    autoHideMenuBar: true,
  });
  mainWindow.setMenu(null);
  mainWindow.loadFile(`src/index.html`);
});

electron.app.once('window-all-closed', () => {
  electron.app.quit();
});
