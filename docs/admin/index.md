# Overview

The administration has various screens, which are displayed depending on the login status.

- During initialization, the loadingscreen is displayed, which usually simply contains a spinner
- If the user is not logged in, the login screen is displayed. The user is shown the login options available to him at this point.
- The administration is located on the main screen
- 
## The Mainscreen

![The UI](/images/admin.png)

The administration interface is divided into several areas. On the left side is the menu bar. The upper part with the logo is the top bar. In the middle, the corresponding views are loaded, which can be changed via the tab bar.
The menu bar is a representation of the various AdminInfos of the ViUR Project. Module groups contain modules, which in turn can contain views. Each module has a configuration, which can be accessed via the submenu.

![The UI](/images/listhandler.png)

The different module types are represented by handlers. The image shows the frequently used list handler. This has a floating bar at the bottom and the handler bar at the top. The actions in the handler bar have a preset depending on the type. This preset can be modified via the admin info and using customActions.
The floating bar, on the other hand, is plugin-capable and can therefore also contain completely custom Widgets.

![The UI](/images/formhandler.png)

The form handler has the entry bar at the top. This is currently not customizable.

## Views
The administration uses a wrapped vue router. The wrapper adds caching to the router so that settings and entries are retained when changing routes.
The individual views are generic for each handler and are displayed accordingly depending on the module configuration.

## Stores
To ensure reactivity across the different components, the administration works with a series of pinia stores.

- appStore: contains the settings transferred from the core. The store is therefore also available without a login.
- colorStore: calculates the color variations required by Shoelace for the primary and secondary colors transferred in the appStore
- contextStore: This store, updates and delivers the local and global contexts via various functions
- dbStore: holds all important information for the admin. This includes registered plugins, adminInfos and opened tabs
- localStore: This store holds data that is to be written to the localstorage. At the current time, only the most recently used tabs are loaded and saved here
- messageStore: This Store handles the success and error Message System.
- moduleStore: Collects and holds the moduleconfs for each module
- userStore: Is responsible for login, logout and holds all user information
- viewStore: Part of the wrapper of the vue router and holds the caching of the routes