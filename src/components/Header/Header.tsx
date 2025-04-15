import { useTranslation } from '@app/i18n'
import Image from 'next/image'

import { HeaderData } from '@/models/headerData'

import Reveal from '../poc/Reveal/Reveal'

import styles from './header.module.scss'

const Header = async ({
  lng,
  headerData,
}: {
  lng: string
  headerData: HeaderData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <header className={styles.header}>
      <Image
        src={headerData.headerImage.url}
        alt={headerData.headerImage.alt}
        width={200}
        height={300}
        priority
        className={styles.img}
      />

      <section className={styles.text}>
        <Reveal>
          <h1 className={styles.title} data-test="header-title">
            {headerData.name}
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.function}>{headerData.function}</h2>
        </Reveal>

        <article>
          <Reveal>
            <a href={headerData.mailValue}>
              <h3 className={styles.mail}>{headerData.mailLabel}</h3>
            </a>
          </Reveal>

          <Reveal>
            <a href={headerData.phoneValue}>
              <h4 className={styles.phone}>{headerData.phoneLabel}</h4>
            </a>
          </Reveal>
          <Reveal>
            <a
              href={headerData.linkedinLink}
              target="_blank"
              rel="noreferrer"
              itemProp="author"
            >
              <Image
                src={'/images/LinkedIn_logo.svg'}
                alt={'Source code'}
                width={100}
                height={70}
                className={styles.linkedinLogo}
              />
            </a>
          </Reveal>
        </article>

        <article>
          <Reveal>
            <h5 className={styles.city}>{headerData.city}</h5>
          </Reveal>
        </article>

        <article>
          <Reveal>
            <a href={headerData.pdfLink} target="_blank">
              <h6 className={styles.city}>{t('pdf')}</h6>
            </a>
          </Reveal>
        </article>
      </section>
    </header>
  )
}

export default Header
