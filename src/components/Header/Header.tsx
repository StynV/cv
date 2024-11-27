import { useTranslation } from '@app/i18n'
import Image from 'next/image'

import Reveal from '../poc/Reveal/Reveal'

import styles from './header.module.scss'

const Header = async () => {
  const { t } = await useTranslation('common')

  return (
    <header className={styles.header}>
      <Image
        src="https://drive.google.com/uc?export=view&id=1BPxIJsPL8Fbdo9bPdgBIxE7DtNlEA0e_"
        alt="My image"
        width={200}
        height={300}
        className={styles.img}
      />

      <div className={styles.text}>
        <Reveal>
          <h1 className={styles.title}>{t('name')}</h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.function}>{t('function')}</h2>
        </Reveal>

        <div>
          <Reveal>
            <a href={t('mailValue')}>
              <h3 className={styles.mail}>{t('mailLabel')}</h3>
            </a>
          </Reveal>

          <Reveal>
            <a href={t('phoneValue')}>
              <h4 className={styles.phone}>{t('phoneLabel')}</h4>
            </a>
          </Reveal>
          <Reveal>
            <a
              href="https://www.linkedin.com/in/styn-vercauteren-96918018b/"
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
        </div>

        <div>
          <Reveal>
            <h5 className={styles.city}>{t('city')}</h5>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <a
              href="https://drive.google.com/file/d/1GNA3IrEMLBXrP5DkZCpFXsZoQ2MRWC_m/view?usp=sharing"
              target="_blank"
            >
              <h6 className={styles.city}>{t('pdf')}</h6>
            </a>
          </Reveal>
        </div>
      </div>
    </header>
  )
}

export default Header
