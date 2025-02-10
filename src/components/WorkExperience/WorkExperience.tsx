import { useTranslation } from '@app/i18n'

import BlockDXC from './BlockDXC/BlockDXC'
import BlockInternship from './BlockInternship/BlockInternship'
import BlockOddball from './BlockOddball/BlockOddball'
import BlockTwoPointO from './BlockTwoPointO/BlockTwoPointO'
import BlockCalqi from './Calqi/BlockCalqi'

import styles from './work-experience.module.scss'

const WorkExperience = async () => {
  const { t } = await useTranslation('common')

  return (
    <article
      className={styles.workExperience}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('workExperience.title')}</h1>

      <BlockCalqi />
      <BlockTwoPointO />
      <BlockOddball />
      <BlockDXC />
      <BlockInternship />
    </article>
  )
}

export default WorkExperience
