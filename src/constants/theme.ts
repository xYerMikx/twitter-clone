const commonTheme = {
  fontSize: {
    f84: "84px",
    f42: "42px",
    f22: "22px",
    f20: "20px",
    f18: "16px",
    f16: "16px",
    f14: "14px",
    f13: "13px",
    f12: "12px",
    f10: "10px",
  },
  fontFamily: {
    roboto: "Roboto",
    robotoSerif: "Roboto Serif",
  },
  zIndex: {
    z1: 1,
    z2: 2,
    z3: 3,
    z4: 4,
  },
  fontWeight: {
    black: 900,
    bold: 700,
    medium: 600,
    regular: 400,
  },
  background: {
    repeat: "no-repeat",
    position: "right",
    xPositionOffset: "calc(100% - 8px)",
  },
  spacings: {
    s5: "5px",
    s10: "10px",
    s15: "15px",
    s20: "20px",
    s25: "25px",
    s30: "30px",
    s35: "35px",
    s40: "45px",
    s45: "45px",
    s50: "50px",
  },
  bgColor: "#EFF3F4",
  inputColor: "#5C6C79",
  borderColor: "#00000033",
  darkColor: "#000000",
  lightGray: "#CCCCCC",
  gray: "#5C6C79",
  blue: "#1DA1F2",
  red: "#EF1C5C",
  green: "#43BE25",
  lightColor: "#FFFFFF",
  disabledColor: "#B3B8BB",
  lightBlue: "#00000014",
  borderSize: "1px",
  borderRadius: "8px",
  buttonRadius: "50px",
  opacity: 0.6,
  opacityMax: 1,
  opacityMin: 0,
}
export const lightTheme = {
  ...commonTheme,
}
export const darkTheme = {
  ...commonTheme,
}

export enum Themes {
  Light = "light",
  Dark = "dark",
}
