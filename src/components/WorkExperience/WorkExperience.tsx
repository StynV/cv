import { useTranslation } from 'next-i18next'
import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'
import Block3 from './Block3/Block3'
import styles from './work-experience.module.scss'

const WorkExperience = () => {
  const { t } = useTranslation('common')

  return (
    <article
      className={styles.workExperience}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h1 className={styles.title}>{t('workExperience.title')}</h1>

      <Block1 />
      <Block2 />
      <Block3 />
    </article>
  )
}

export default WorkExperience
