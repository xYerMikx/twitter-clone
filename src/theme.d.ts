import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string
    primaryColor: string
    currentTheme: string
    bgColor: string
    bgSidebarColor: string
    borderColor: string
    fontSize: {
      f84: string
      f62: string
      f52: string
      f42: string
      f35: string
      f30: string
      f24: string
      f22: string
      f20: string
      f18: string
      f16: string
      f14: string
      f13: string
      f12: string
      f10: string
    }
    fontFamily: {
      roboto: string
      robotoSerif: string
    }
    zIndex: {
      z1: number
      z2: number
      z3: number
      z4: number
      z10: number
    }
    fontWeight: {
      black: number
      bold: number
      medium: number
      regular: number
    }
    background: {
      repeat: string
      position: string
      xPositionOffset: string
    }
    spacings: {
      s5: string
      s10: string
      s15: string
      s20: string
      s25: string
      s30: string
      s35: string
      s40: string
      s45: string
      s50: string
    }
    boxShadow: string
    inputColor: string
    darkColor: string
    lightGray: string
    gray: string
    blue: string
    red: string
    green: string
    lightColor: string
    disabledColor: string
    lightBlue: string
    borderSize: string
    buttonRadius: string
    opacity: number
    opacityMax: number
    opacityMin: number
  }
}
