const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
    width: 1100,
    height:850,
  });
  
  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle add item window
// function createAddWindow(){
//   addWindow = new BrowserWindow({
//     width: 300,
//     height:200,
//     title:'Add Shopping List Item'
//   });
//   addWindow.loadURL(url.format({
//     pathname: path.join(__dirname, 'addWindow.html'),
//     protocol: 'file:',
//     slashes:true
//   }));
//   // Handle garbage collection
//   addWindow.on('close', function(){
//     addWindow = null;
//   });
// }

function createLayout1Window(){
  layout1 = new BrowserWindow({
    width: 1100,
    height:850,
    title:'LAYOUT 1'
  });
  layout1.loadURL(url.format({
    pathname: path.join(__dirname, 'layout1.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Handle garbage collection
  layout1.on('close', function(){
    layout1 = null;
  });
}

function createLayout2Window(){
  layout2 = new BrowserWindow({
    width: 1100,
    height:850,
    title:'LAYOUT 2'
  });
  layout2.loadURL(url.format({
    pathname: path.join(__dirname, 'layout2.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Handle garbage collection
  layout2.on('close', function(){
    layout2 = null;
  });
}

function createLayout3Window(){
  layout3 = new BrowserWindow({
    width: 1100,
    height:850,
    title:'LAYOUT 3'
  });
  layout3.loadURL(url.format({
    pathname: path.join(__dirname, 'layout3.html'),
    protocol: 'file:',
    slashes:true
  }));
  // Handle garbage collection
  layout3.on('close', function(){
    layout3 = null;
  });
}


// Catch item:add
// ipcMain.on('item:add', function(e, item){
//   mainWindow.webContents.send('item:add', item);
//   addWindow.close(); 
//   // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
//   //addWindow = null;
// });

// Create menu template
const mainMenuTemplate =  [
  // Each object is a dropdown
  {
    label: 'File',
    submenu:[
      // {
      //   label:'Layout1',
      //   click(){
      //     createLayout1Window();
      //   }
      // },
      // {
      //   label:'Layout2',
      //   click(){
      //     createLayout2Window();
      //   }
      // },
      // {
      //   label:'Layout3',
      //   click(){
      //     createLayout3Window();
      //   }
      // },
      {
        label: 'Quit',
        accelerator:process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

// If OSX, add empty object to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

// Add developer tools option if in dev
// if(process.env.NODE_ENV !== 'production'){
//   mainMenuTemplate.push({
//     label: 'Developer Tools',
//     submenu:[
//       {
//         role: 'reload'
//       },
//       {
//         label: 'Toggle DevTools',
//         accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
//         click(item, focusedWindow){
//           focusedWindow.toggleDevTools();
//         }
//       }
//     ]
//   });
// }