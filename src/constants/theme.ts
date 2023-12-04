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
  fontWeight: {
    black: 900,
    bold: 700,
    medium: 600,
    regular: 400,
  },
  spacings: {
    xs: "5px",
    sm: "10px",
    md: "15px",
    lg: "20px",
    xl: "25px",
    xxl: "35px",
    xxxl: "50px",
  },
  bgColor: "#F1F1F1",
  borderColor: "#00000033",
  darkColor: "#000000",
  lightGray: "#CCCCCC",
  gray: "#5C6C79",
  blue: "#1DA1F2",
  lightColor: "#FFFFFF",
  disabledColor: "#B3B8BB",
  lightBlue: "#00000014",
  borderSize: "1px",
  borderRadius: "8px",
  buttonRadius: "50px",
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
