import { useTranslation } from '@app/i18n'

import BlockDXC from './BlockDXC/BlockDXC'
import BlockInternship from './BlockInternship/BlockInternship'
import BlockOddball from './BlockOddball/BlockOddball'
import BlockTwoPointO from './BlockTwoPointO/BlockTwoPointO'
import BlockCalqi from './Calqi/BlockCalqi'

import styles from './work-experience.module.scss'

const WorkExperience = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <article
      className={styles.workExperience}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('workExperience.title')}</h1>

      <BlockCalqi lng={lng} />
      <BlockTwoPointO lng={lng} />
      <BlockOddball lng={lng} />
      <BlockDXC lng={lng} />
      <BlockInternship lng={lng} />
    </article>
  )
}

export default WorkExperience
