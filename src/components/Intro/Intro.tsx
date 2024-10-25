import { useTranslation } from '@app/i18n'
import YGWYS from '../YGWYS/YGWYS'
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
    </article>
  )
}

export default Intro
