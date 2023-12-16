export enum Sizes {
  DESKTOP_LG = 1280,
  DESKTOP = 992,
  TABLET = 768,
  PHONE = 576,
}

type Media = Record<keyof typeof Sizes, string>

export const media: Media = Object.keys(Sizes).reduce((acc: Media, label: string) => {
  acc[label as keyof typeof Sizes] = `(max-width: ${
    Sizes[label as keyof typeof Sizes]
  }px)`
  return acc
}, {} as Media)
