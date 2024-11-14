import { boot } from "quasar/wrappers";
import { setCssVar } from "quasar";
import { configuration } from "./config";
import { getColorCode } from "src/helpers/colors";

// Export to Vue Components
export default boot(async ({ app }) => {
  const theme = configuration.themeManager.getCurrentTheme();

  function checkAndSet(key, value) {
    if (value) {
      setCssVar(key, getColorCode(value));
    }
  }

  if (theme) {
    checkAndSet("primary", theme.global?.primary);
    checkAndSet("secondary", theme.global?.secondary);
    checkAndSet("accent", theme.global?.accent);
    checkAndSet("dark", theme.global?.dark);
    checkAndSet("dark-pag", theme.global["dark-page"]);
    checkAndSet("positive", theme.global?.positive);
    checkAndSet("negative", theme.global?.negative);
    checkAndSet("info", theme.global?.info);
    checkAndSet("warning", theme.global?.warning);

    checkAndSet("qstudio-layout-header-background", theme.layout.header.backcolor);
    checkAndSet("qstudio-layout-header-color", theme.layout.header.textcolor);
    checkAndSet("qstudio-layout-footer-background", theme.layout.footer.backcolor);
    checkAndSet("qstudio-layout-footer-color", theme.layout.footer.textcolor);
    checkAndSet("qstudio-layout-leftpanel-background", theme.layout.leftPanel.backcolor);
    checkAndSet("qstudio-layout-leftpanel-color", theme.layout.leftPanel.textcolor);
    checkAndSet("qstudio-layout-rightpanel-background", theme.layout.rightPanel.backcolor);
    checkAndSet("qstudio-layout-rightpanel-color", theme.layout.rightPanel.textcolor);

    checkAndSet("qstudio-navigation-background", theme.navigation.backcolor);
    checkAndSet("qstudio-navigation-color", theme.navigation.textcolor);
    checkAndSet("qstudio-navigation-iconcolor", theme.navigation.iconcolor);
  }
});
