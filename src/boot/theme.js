import { boot } from "quasar/wrappers";

import { getCssVar, setCssVar, colors } from "quasar";
import { configuration } from "./config";
import { Dark } from "quasar";

console.log("Boot file: theme");

// Export to Vue Components
export default boot(async ({ app }) => {
  console.log("Executing boot file: theme");

  const theme = configuration.themeManager.getCurrentTheme();

  /**
   * Convert a color value (including variable names) into a propert #RGB color string
   * @param {String} value Color value
   * @returns {String} #RGB color
   */
  function convertValue(value) {
    if (!value.startsWith("#")) {
      // Value is a standard CSS variable name
      const color = colors.getPaletteColor(value);
      if (color != "#000000") return color;
      else return getCssVar(value);
    } else {
      // Value is a standard #RGB string
      return value;
    }
  }

  if (theme) {
    // Dark mode
    Dark.set(theme.dark);

    // Set variables
    Object.keys(theme.variables).forEach((key) => {
      let value = theme.variables[key];

      // Sanitize the variable name
      //let name = theme.getSanitizedVariableName(key);
      let name = key;

      // Create a valid color value
      value = convertValue(value);

      // Check if it is a valid value
      if (value && value.startsWith("#")) {
        // Set value
        setCssVar(name, value);
      }
    });

    // Create a new style sheet
    const sheet = new CSSStyleSheet();

    // Create automatic styles for each variable
    Object.keys(theme.variables).forEach((key) => {
      //if (!key.startsWith("q_")) {
      // Non-quasar variable
      const value = convertValue(theme.variables[key]);
      sheet.insertRule(`.text-${key} { color: ${value} !important; }`);
      sheet.insertRule(`.bg-${key} { background: ${value} !important; }`);
      //}
    });

    // Read all custom styles
    Object.keys(theme.styles).forEach((key) => {
      // Style
      const style = theme.styles[key];

      // Create a rule
      let cssContent = "";
      Object.keys(style).forEach((cssKey) => {
        let value = convertValue(style[cssKey]);
        cssContent += `${cssKey}: ${value} !important; `;
      });
      let rule = `.${key} { ${cssContent} } `;

      // Add the rule
      sheet.insertRule(rule);
    });

    // Attach the style sheet to the current document
    document.adoptedStyleSheets = [sheet];
  }
});
