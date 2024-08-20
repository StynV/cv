import { useTranslation } from '@app/i18n'
import Block1 from './Block1/Block1'
import styles from './personalProjects.module.scss'

const PersonalProjects = async () => {
  const { t } = await useTranslation('common')

  return (
    <article
      className={styles.personalProjects}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h1 className={styles.title}>{t('personalProjects.title')}</h1>

      <Block1 />
    </article>
  )
}

export default PersonalProjects
