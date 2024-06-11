export const Fonts = {
    hanumanBlack: 'Hanuman-Black',
    hanumanBold: 'Hanuman-Bold',
    hanumanLight: 'Hanuman-Light',
    hanumanRegular: 'Hanuman-Regular',
    hanumanThin: 'Hanuman-Thin',
  } as const;
  
  export type FontName = keyof typeof Fonts