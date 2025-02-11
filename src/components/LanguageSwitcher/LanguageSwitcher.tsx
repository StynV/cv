'use client'

import { useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import styles from './language-switcher.module.scss'

const languages = {
  en: 'English',
  nl: 'Nederlands',
}

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [isPending, startTransition] = useTransition()

  const currentLang =
    Object.keys(languages).find(lng => pathName.startsWith(`/${lng}`)) || 'en'

  const changeLanguage = (lng: string) => {
    startTransition(() => {
      router.push(`/${lng}${pathName.replace(/^\/(en|nl)/, '')}`)
    })
  }

  return (
    <section className={styles.main}>
      <select
        onChange={e => changeLanguage(e.target.value)}
        disabled={isPending}
        className={styles.select}
      >
        {Object.entries(languages).map(([lng, label]) => (
          <option key={lng} value={lng}>
            {label}
          </option>
        ))}
      </select>
    </section>
  )
}

export default LanguageSwitcher
