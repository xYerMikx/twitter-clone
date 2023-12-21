import { Sizes } from "@/constants/sizes"

export const getButtonVariant = () => {
  if (window.innerWidth <= Sizes.DESKTOP_LG && window.innerHeight > Sizes.TABLET) {
    return "XMD"
  } if (window.innerWidth <= Sizes.TABLET) {
    return "MD"
  } 
    return "LG"
  
}
