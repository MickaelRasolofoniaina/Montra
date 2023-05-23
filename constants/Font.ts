import { normalizeMeasure } from "utils/Style"

export const fontFamily = {
  bold: "Inter-Bold",
  semiBold: "Inter-SemiBold",
  medium: "Inter-Medium",
  regular: "Inter-Regular"
}

/**
 * Available font size: 64, 40, 32, 24, 22, 18, 16, 14, 13, 10
 */

export const fontSize = {
  extraLarge: normalizeMeasure(4), // 32
  large: normalizeMeasure(3), // 24
  medium: normalizeMeasure(2) // 16
}
