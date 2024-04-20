import { useTranslation } from 'next-i18next'
import Block1 from './Block1/Block1'
import styles from './personalProjects.module.scss'

const PersonalProjects = () => {
  const { t } = useTranslation('common')

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
