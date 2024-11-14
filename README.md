# Quasar Studio

Quasar Studio is a standard Quasar project that embeds a lot of preconfigured content to create enterprise web application.

Instead of working on the /src folder, as usually Quasar developers do, an additional folder called /framework contains all configurations file needed to create a quasar studio web application

Quasar Studio comes with a handy CLI that helps developers to create content in the /framework folder

This is the overall picture of the architectural stack of a Quasar Studio Web Application

- HTML, CSS and JS content (vanilla apps)
  - VueJS framework (vue app)
    - Quasar framework (/src folder)
      - Quasar Studio project (/framework folder)

## Installation of Quasar Studio Applicatiion Template (clone git repository)

### Prerequisites

1. Install [npm][1] (if not available on your machine, check with `$ npm -v` )
2. Install [git][2] (if not available on your machine, check with `$ git --version`)

Make sure you have already installed the [Quasar Studio CLI][3]
If you haven't yet, use the command `$ npm run cli-install` or follow the instuction on the [npm page][3]
If you have, be sure the Quasar Studio CLI is up-to-date with the command `$ npm run cli-update`

### Installation

1. `$ git clone https://github.com/mymax9172/quasar-studio.git`
2. Change directory name `quasar-studio` with whatever you prefer
3. `$ cd <your_directory_name>`
4. `$ qstudio install`

## Create your first Quasar Studio Web Application

Once installed Quasar Studio Application requires a /framework folder where all your configuration is defined.

`$ qstudio init`

This command creates a proper folder structure under the new /framework folder

- framework
  - [config](#config-folder)
  - [languages](###languages)
  - [layouts](###layouts)
  - [src](###src)
  - [storyboard](#storyboard)
  - [themes](#themes)

Content of this folder can be updated either manually or by using the Quasar Studio CLI tool. In both cases any change will be reflected into the live application (if running).

---

### Config folder

This folder contains the following js files:

- [**application.js**](#applicationjs), global configuration of the web application
- [**icon-library.js**](#icon-libraryjs), global definition of the icons uses (font-awesome, material icons libraries)
- [**navigation.js**](#navigationjs), list of main menus of the application
- [**storyboard.js**](#storyboardjs), where pages are defined

---

#### Application.js

This file exports an application JS Object with all global definitions of the Web Application

An example of this file is the following:

```js
export const application = {
  manifestVersion: "1.0.0",
  name: "MyBlog",
  title: "MyBlog 2024",
  credits: {
    owner: "Massimiliano Agostinoni",
    copyright: "MIT",
  },
  versioning: {
    type: "manual",
    version: {
      number: "0.3",
      build: "2024111.16432",
    },
  },
  languages: {
    default: "en-US",
    supported: ["en-US", "it-IT"],
  },
  layouts: {
    default: "main",
    templates: ["main", "secondary"],
  },
  themes: {},
  entitlements: [],
};
```

These are the property of this file:

- **manifestVersion**, this reports the version of the Quasar Studio Framework in use, DO NOT CHANGE IT MANUALLY.

  > Quasar Studio CLI has a _update_ command to update the framework configuration to the latest one

- **name**, this is the name of the application
- **title**, this is the official title of the application
- **tab**, this is the text in the browser tab; if not reported use the title of the application, otherwise can be a string or a function
- **credits**, this is a standard object shown by the credit popup screen. A credit popup screen is shown if the user clicks on the version element (see later)
- **versioning**, this is a standard object how to manage versioning and current version of the application:

  - **type**, versioning model. It could be _manual_ (change version manually or using Quasar Studio CLI), _auto_ (this means Quasar Studio CLI update minor version evry new build), or _date_ (this means Quasar Studio CLI update version as YEAR/MONTH of any new build)
  - **version**, the actual version of the web application
    - **number**, a string in the form "Major"."Minor" (i.e. '1.12')
    - **build**, a progressive number that define the current build.

  > Quasar Studio CLI has a _version_ command to upgrade the minor/major version as well as the build number

- **languages**, this is a standard object that defines supported languages for the application. Internazionalization is activated by default and cannot be removed: - **default**, the iso-code (i.e. en, en-US, it-IT) of the default language - **supported**, an array of supported iso-code. _(see further for language definitions)_

  > Quasar Studio CLI has a _language_ command to quickly add a language key to all language files (value must be defined manually for each language file)

- **layouts**, this is a standard object that defines layouts adopted by the application

  - **default**, default layout to be used if the current page does not report a specific one
  - **templates**, an array of available layouts name. _(see further for layout definitions)_

  > Quasar Studio CLI has a _layout_ command to create a new layout file

- **themes**, this is a standard object that defines themes used in the application

  - **configurable**, set to _true_ if the end users can create custom themes. If this value is set to _false_ only defined system themes are available
  - **default**, default theme
  - **templates**, an array of available themes name. _(see further for themes definitions)_

  > Quasar Studio CLI has a _theme_ command to create a new theme file

- **entitlements**, this is an array of different entitlements (if any)

---

#### Icon Library.js

This file exports an iconLibrary JS Object where all icons used by the application are listed.

> Some of them might be used by preconfigured content, if removed a default icon will be shown instead

An example of this file is the following:

```js
export const iconLibrary = {
  "qs-bars": "fa-solid fa-bars",
  "qs-home": "fa-solid fa-house",
  "qs-back": "fa-solid fa-circle-left",
};
```

Each key-value pairs describes the name used into the application (i.e. bars) and the value into the icon library (i.e. "fa-solid fa-bars" in FontAwesome)

By default either _FontAwesome v6_ and _Google Material_ icons library are enabled. To activate additional icon libraries please refer to this document: [How to extend icon libraries](https://quasar.dev/options/installing-icon-libraries#introduction)

> Allo icons started with qs- are used by the framework itself, can be changed but DO NOT REMOVE THEM

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
   - _panel_, this means the left panel section of the layout (vertical menu);
   - _header_, this means the header section of the layout (horizontal menu)

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
  - _backcolor_, color of the background
  - _textcolor_, color of the foreground
  - _iconcolor_, color of the icon

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

## Languages

This folder contains a file for each supported language.

> Use Quasar Studio CLI to create a brand new file and add the isocode into the supported property in the language section in application.js
>
> A clone of the default language file is created, in this way all keys are already available (value must be translated though)

Each file contains a standard JS object where each key has a corresponding translation for that language, like in the example below

```js
export const language = {
  version: "Version",
  customers: "Customers",
  suppliers: "Suppliers",
};
```

If a key is missing the fallback language file is the one considered the default language, if even in there is missing the key, the key itself is shown (a warning value is also reported in the browser console).

> Use the Quasar Studio CLI to create a new key, in this way a new key is created in all available files (values must be changed though).

TO DO If auto-translate is activated, a first draft translation is provided.

---

[1]: https://npmjs.org
[2]: https://git-scm.com
[3]: https://www.npmjs.com/package/qstudio-cli?activeTab=readme
