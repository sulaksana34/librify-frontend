export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  id: {
    name: 'Indonesia',
    iso: 'id-ID',
    flag: 'i-twemoji-flag-indonesia',
  },
  en: {
    name: 'English',
    iso: 'en-US',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
}
