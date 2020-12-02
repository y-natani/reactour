// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

export const tourConfig = [
  {
    selector: '.explanation',
    content: `Ok, let's start with the name of the Tour that is about to begin.`,
  },
  {
    selector: '.title',
    content: `And this is our cool bus...`,
  },
  {
    selector: '.aaa',
    content: `And this is our cool bus...`,
  },
]
