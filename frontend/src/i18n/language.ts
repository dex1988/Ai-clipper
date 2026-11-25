export const supportedLanguages = ['zh', 'zh-TW', 'en', 'ja', 'ko', 'es', 'pt', 'ru', 'fr', 'id', 'tr', 'vi', 'de'] as const
export type Language = typeof supportedLanguages[number]
export type LanguagePreference = Language | 'system'
export const LANGUAGE_STORAGE_KEY = 'autoclip.language'

export function resolveLanguage(_preference: string | null, _browserLanguages: readonly string[] = []): Language {
  return 'en'
}

export function readPreference(): LanguagePreference {
  return 'en'
}
