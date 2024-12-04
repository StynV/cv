import Marquee from 'react-fast-marquee'
import { useTranslation } from '@app/i18n'

import YGWYS from '../YGWYS/YGWYS'
import icons from './icons'

import styles from './intro.module.scss'

const Intro = async () => {
  const { t } = await useTranslation('common')

  const html: string = t('intro2')
  const html3: string = t('intro3')

  return (
    <article
      className={styles.intro}
      itemScope
      itemType="https://schema.org/Article"
    >
      <p className={styles.text}>{t('intro1')}</p>
      <YGWYS html={html} className={styles.text} />
      <YGWYS html={html3} className={styles.text} />

      <Marquee autoFill pauseOnHover speed={30} className={styles.icons}>
        {icons.map(icon => (
          <div key={icon.label} className={styles.marqueeIcon}>
            <span>{icon.icon}</span>
          </div>
        ))}
      </Marquee>
    </article>
  )
}

export default Intro
