import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const router = useRouter()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    router.push(router.pathname, router.asPath, { locale: lng })
  }

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('sq')}>Shqip</button>
    </div>
  )
}
