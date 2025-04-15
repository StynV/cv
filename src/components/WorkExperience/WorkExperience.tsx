import { useTranslation } from '@app/i18n'

import { WorkExperienceData } from '@/models/workExperienceData'

import BlockDXC from './BlockDXC/BlockDXC'
import BlockInternship from './BlockInternship/BlockInternship'
import BlockOddball from './BlockOddball/BlockOddball'
import BlockTwoPointO from './BlockTwoPointO/BlockTwoPointO'
import BlockCalqi from './Calqi/BlockCalqi'

import styles from './work-experience.module.scss'

const WorkExperience = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <article
      className={styles.workExperience}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('workExperience.title')}</h1>

      <BlockCalqi workExperienceData={workExperienceData} lng={lng} />
      <BlockTwoPointO lng={lng} workExperienceData={workExperienceData} />
      <BlockOddball lng={lng} workExperienceData={workExperienceData} />
      <BlockDXC lng={lng} workExperienceData={workExperienceData} />
      <BlockInternship lng={lng} workExperienceData={workExperienceData} />
    </article>
  )
}

export default WorkExperience
