import { useTranslation } from 'next-i18next'
import styles from './intro.module.scss'

const Intro = () => {
    const { t } = useTranslation('common')

    return (
        <article className={styles.intro}>
          <p>{t('intro1')}</p>
          <p>{t('intro2')}</p>
          <p>{t('intro3')}</p>
        </article>
    )
}

export default Intro
