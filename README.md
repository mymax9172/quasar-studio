# Quasar Studio

Quasar Studio is a standard Quasar project that embeds a lot of preconfigured content to create enterprise web application.

Instead of working on the /src folder, as usually Quasar developers do, an additional folder called /framework contains all configurations file needed to create a quasar studio web application
 
Quasar Studio comes with a handy CLI that helps developers to create content in the /framework folder

This is the overall picture of the architectural stack of a Quasar Studio Web Application

- HTML, CSS and JS content (vanilla apps)
	- VueJS framework (vue app)
		- Quasar framework (/src folder)
			- Quasar Studio project (/framework folder)
	 
## Installation of Quasar Studio (clone git repository)

1. Install [npm][1]
2. `$ git clone https://github.com/mymax9172/quasar-studio.git`
3. Change your directory to the Quasar directory
4. `$ npm install`

## Installation of Quasar Studio CLI (clone git repository)

Quasar Studio CLI must be installed just once (and globally)

1. `$ git clone ....`
2. Change your directory to the Quasar directory
3. `$ npm install`
4. `$ npm link`

From now on, call qstudio from any folder that contains a Quasar application to use the CLI

## Create your first Quasar Studio Web Application

Once installed it is required to create the /framework folder.

`$ qstudio init`

This command creates a proper folder structure under the new /framework folder

- framework
	- [config](###config-folder)
	- [languages](###languages)
	- [layouts](###layouts)
	- [src](###src)
	- [storyboard](###storyboard)

Content of this folder can be updated either manually or by using the Quasar Studio CLI tool. In both cases any change will be reflected into the live application (if running). 

To check if the /framework folder is correct, it is possible to launch the following command:

`$ qstudio check`

Any error or warning will be reported in the terminal

---
### Config folder

This folder contains the following js files:

- [**application.js**](#application.js), global configuration of the web application
- [**icon-library.js**](#icon-library.js), global definition of the icons uses (font-awesome, material icons libraries)
- [**navigation.js**](#navigation.js), list of main menus of the application
- [**storyboard.js**](#storyboard.js), where pages are defined
- [**themes.js**](#themes.js), where all themes (styles and colors) are defined

---
#### Application.js
This file exports an application JS Object with all global definitions of the Web Application

An example of this file is the following:

```js
export const application = {
  name: "MyBlog",
  title: "MyBlog 2024",
  credits: {
    owner: "Massimiliano Agostinoni",
    copyright: "MIT",
  },
  version: {
    // Application version number
    number: "0.0.1",

    // Build number
    build: 1,
  },
  languages: {
    default: "en-US",
    supported: ["en-US", "it-IT"],
  },
  layouts: {
    default: "main",
    templates: ["main", "secondary"],
  },
  entitlements: [],
};
```

These are the property of this file:
1. **name**, this is the name of the application, is also shown on the browser tab
2. **title**, this is the official title of the application, is also shown on header page (if the layout has an header element). This title can be overriden by the same property on the page
3. **credits**, this is a standard object shown by the credit popup screen. A credit popup screen is shown if the user clicks on the version element (see later)
4. **version**, this is a standard object that defines the current version of the application:
	- **number**, a string in the form "Major"."Minor" (i.e. '1.12')
	- **build**, a progressive number that define the current build. 
> Quasar Studio CLI has a *version* command to upgrade the minor/major version as well as the build number

5. **languages**, this is a standard object that defines supported languages for the application. Internazionalization is activated by default and cannot be removed:
	- **default**, the iso-code (i.e. en, en-US, it-IT) of the default language
	- **supported**, an array of supported iso-code. *(see further for language definitions)*
> Quasar Studio CLI has a *language* command to quickly add a language key to all language files (value must be defined manually for each language file)

6. **layouts**, this is a standard object that defines layouts adopted by the application
	- **default**, default layout to be used if the current page does not report a specific one
	- **templates**, an array of available layouts name. *(see further for layout definitions)* 
> Quasar Studio CLI has a *layout* command to create a new layout file

7. **entitlements**, this is an array of different entitlements (if any)
	


---
#### Icon Library.js
This file exports an iconLibrary JS Object where all icons used by the application are listed.  
> Some of them might be used by preconfigured content, if removed a default icon will be shown instead

An example of this file is the following:

```js
export const iconLibrary = {
  bars: "fa-solid fa-bars",
  home: "fa-solid fa-house",
  back: "fa-solid fa-circle-left",
  business: "fa-solid fa-building",
};
```
Each key-value pairs describes the name used into the application (i.e. bars) and the value into the icon library (i.e. "fa-solid fa-bars" in FontAwesome)

By default either *FontAwesome v6* and *Google Material* icons library are enabled. To activate additional icon libraries please refer to this document: [How to extend icon libraries](https://quasar.dev/options/installing-icon-libraries#introduction)

---
#### Navigation.js
This file exports a navigation JS Object where it is described navigation menus items.

An example of this file is the following:

```js
export const navigation = {
  position: "panel",
  items: [
     {
      name: "customers",
      title: "customers",
      caption: "customers",
      icon: "business",
      to: "/client/organization/view",
      style: {
        iconcolor: "accent",
      },
    },
    {
      name: "suppliers",
      title: "suppliers",
      caption: "suppliers",
      icon: "business",
      to: "/client/organization/view",
      style: {
        iconcolor: "accent",
      },
      items: [],
    },
  ],
};
```

These are the property of this file:
1. **position**, this is where the navigation menu is shown. Two options:
	- *panel*, this means the left panel section of the layout (vertical menu);
	- *header*, this means the header section of the layout (horizontal menu)

> Vertical menu can contains unlimited number of nested submenus (see later), but practically the available space suggests to keep these levels above 3

> Horizontal menu shows only top level menu items, submenus are shown only once clicked on the parent menu level 

2. **items**, this is an array of menu items (see later). 

**Menu Item**
A menu item is a standard JS object that describes how the menu item is shown and interact with the user.
These are the property of a menu item:  

- **name**, a unique name of the menu item. This will be used to define what actions should be executed when the user clicks on it
- **title**, this is the title of the menu item, this should be a key of language files
- **caption**, this is the subtitle (optional), referring to a key of language files
- **icon**, icon to be shown (optional), referring to an icon in the icon library
- **to**, the path where redirect the navigation (optional)
- **style**, this is a standard JS object that defines a specific style for the menu item:
	- *backcolor*, color of the background
	- *textcolor*, color of the foreground
	- *iconcolor*, color of the icon

> Style defined at this level overrides any style defined at the theme level

- **items**, this is an array of submenenu items (optional)


---
#### Storyboard.js
This file exports a storyboard JS Object where it is described pages in the application. Actually in this file is only listed all available pages, whereas the actual definition of those pages is into a js fil in the storyboard folder

An example of this file is the following:

```js
export const storyboard = {
  pages: [
    {
      name: "home-page",
      path: "common",
      url: "/",
    },
  ],
```


These are the property of this file:
- **pages**, this is an array of all pages

**Page**
A page is a standard JS object that describes how and when render a single page of the application.
These are the property of a menu item:  

- **name**, name of the page (must be a valid js identifier)
> An existing js file with the exact same name reported here needs to be defined in the storyboard folder.

- **path**, folder path (within the storyboard folder) where the page definition is
> In this example a js file must be defined with a full path at: /storyboard/common/home-page.js
- **url**, navigation url where this page is responding to

---
#### Themes.js
This file exports a themes JS Object where it is described available themes for the application. 

An example of this file is the following:

```js
export const themes = {
  default: "default",

  templates: {
    default: {
      dark: false,
      header: {
        backcolor: "green",
        textcolor: "red",
      },
      footer: {
        backcolor: "green",
        textcolor: "red",
      },
      leftPanel: {
        backcolor: "green",
        textcolor: "red",
      },
      rightPanel: {
        backcolor: "green",
        textcolor: "red",
      },
      navigation: {
        backcolor: "green",
        textcolor: "red",
        iconcolor: "red",
      },
  },
};
```

These are the property of this file:
- **default**, default theme to be applied if the user does not select a different one
- **templates**, this is an array of available themes

// DA MODIFICARE SPOSTANDO I TEMI DENTRO UNA CARTELLA /themes A LIVELLO ROOT, STESSA TECNICA DEI LAYOUTS
















---
## Quasar Studio CLI

### init command

### version command

### language command

---
[1]: https://npmjs.org

