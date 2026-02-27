import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  warnHtmlMessage: false, // позволяет использовать html в переводах, надо изменить
}))
