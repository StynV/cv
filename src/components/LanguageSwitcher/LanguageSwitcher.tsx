'use client'

import { useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import styles from './language-switcher.module.scss'

const languages = {
  nl: 'Nederlands',
  en: 'English',
}

const LanguageSwitcher = ({ currentLng }: { currentLng: string }) => {
  const router = useRouter()
  const pathName = usePathname()
  const [isPending, startTransition] = useTransition()

  const otherLng = Object.entries(languages).find(([lng, label]) => {
    if (lng !== currentLng) return { label }
  })

  const changeLanguage = () => {
    startTransition(() => {
      router.push(
        `/${otherLng && otherLng[0]}${pathName.replace(/^\/(en|nl)/, '')}`
      )
    })
  }

  return (
    <section className={styles.main}>
      <button
        onClick={changeLanguage}
        disabled={isPending}
        className={styles.select}
        data-test="language-button"
      >
        {otherLng && otherLng[1]}
      </button>
    </section>
  )
}

export default LanguageSwitcher
