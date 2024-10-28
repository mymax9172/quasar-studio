/***********************************************************
 * This file describe your layouts
 ************************************************************/
export const layouts = {
  // Default layout template
  default: "main",

  // Layout templates
  templates: {
    // Layout template definition, named "main"
    main: {
      // Header definition
      header: {
        // **************** LEFT SLOT
        // Show the home icon
        showHomeIcon: true,
        // Show the back icon
        showBackIcon: true,
        // Remove the left slot
        // noLeftSlot: true
        // **************** MIDDLE SLOT
        // Set the title, using a string value, this overrides the title property provided in application.js
        // title: "My Application title",
        // Remove the title slot
        // noMiddleSlot: true,
        // **************** RIGHT SLOT
        // Show application version
        // showVersion: true,
        // Show the language switcher
        showLanguageSwitcher: true,
        // Remove the left slot
        // noRightSlot: true,
        // **************** STYLE
        style: {
          // Show shadow
          shadow: true,
          // Background color (overrides theme)
          //backcolor: "accent",
          // Text color (overrides theme)
          //textcolor: "grey-2",
        },
        // **************** CUSTOM SLOTS
        // Extend the default component with additional content based on available slots
        slots: {
          // left: () => import("framework/src/components/my-header.vue"),
          // middle: () => import("framework/src/components/my-header.vue"),
          // right: () => myComponent(import("framework/src/components/my-header.vue"),
        },
      },
      // Left Panel definition
      leftPanel: {
        // **************** TOP SLOT
        // Remove the top slot
        // noTopSlot: true,

        // **************** MIDDLE SLOT
        // Remove the center slot
        // noMiddleSlot: true,

        // **************** BOTTOM SLOT
        // Remove the bottom slot
        // noBottomSlot: true,
        // Mini style
        // mini: {
        //   enabled: true,
        //   width: 90,
        // },
        // **************** STYLE
        style: {
          // Background color (overrides theme)
          // backcolor: "accent",
          // Text color (overrides theme)
          // textcolor: "grey-2",
        },
        // **************** CUSTOM SLOTS
        // Extend the default component with additional content based on available slots
        slots: {
          // top: () => import("framework/src/components/my-header.vue"),
          // middle: () => import("framework/src/components/my-header.vue"),
          // bottom: () => myComponent(import("framework/src/components/my-header.vue"),
        },
      },
      // Right Panel definition
      // rightPanel: {},
      // Footer definition
      footer: {
        // **************** LEFT SLOT
        // Remove the left slot
        //noLeftSlot: true,
        // **************** MIDDLE SLOT
        // Remove the center slot
        // noMiddleSlot: true,
        // **************** RIGHT SLOT
        // Remove the left slot
        //noRightSlot: true,
        // Show application version (right slot)
        showVersion: true,
        // **************** STYLE
        style: {
          // Show shadow
          shadow: true,
          // Background color (overrides theme)
          //backcolor: "accent",
          // Text color (overrides theme)
          //textcolor: "grey-2",
        },
        // **************** CUSTOM SLOTS
        // Extend the default component with additional content based on available slots
        slots: {
          // left: () => import("framework/src/components/my-header.vue"),
          // middle: () => import("framework/src/components/my-header.vue"),
          // right: () => myComponent(import("framework/src/components/my-header.vue"),
        },
      },
    },

    // Layout template definition for mobile, also named "main"
    "main-mobile": {
      // Header definition
      header: {
        showHomeIcon: true,
        noTitleSlot: true,
      },

      // Footer definition
      footer: {},
    },

    // Secondary layout definition
    secondary: {},
  },
};
