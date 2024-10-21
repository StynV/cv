import { useTranslation } from '@app/i18n'
import Block1 from './Block1/Block1'
import styles from './volunteer-work.module.scss'
import Block2 from './Block2/Block2'

const VolunteerWork = async () => {
  const { t } = await useTranslation('common')

  return (
    <article
      className={styles.volunteerWork}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h1 className={styles.title}>{t('volunteerWork.title')}</h1>

      <Block1 />
      <Block2 />
    </article>
  )
}

export default VolunteerWork
