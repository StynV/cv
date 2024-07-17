import { useTranslation } from 'next-i18next'
import styles from './work-experience.module.scss'
import BlockOddball from './BlockOddball/BlockOddball'
import BlockDXC from './BlockDXC/BlockDXC'
import BlockInternship from './BlockInternship/BlockInternship'
import BlockTwoPointO from './BlockTwoPointO/BlockTwoPointO'

const WorkExperience = () => {
  const { t } = useTranslation('common')

  return (
    <article
      className={styles.workExperience}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h1 className={styles.title}>{t('workExperience.title')}</h1>
      
      <BlockTwoPointO />
      <BlockOddball />
      <BlockDXC />
      <BlockInternship />
    </article>
  )
}

export default WorkExperience
