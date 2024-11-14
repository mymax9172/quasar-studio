import { colors } from "quasar";
const { getPaletteColor } = colors;

export function getColorCode(value) {
  if (value && !value.startsWith("#")) return getPaletteColor(value);
  else return value;
}
