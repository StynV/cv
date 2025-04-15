import { useTranslation } from '@app/i18n'

import { WorkExperienceData } from '@/models/workExperienceData'

import Block from '../../Block/Block'

import styles from './block-internship.module.scss'

const BlockInternship = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={workExperienceData.internshipIcappsTitle}
      period={workExperienceData.internshipIcappsPeriod}
    >
      <p className={styles.text}>{workExperienceData.internshipIcappsText}</p>
      <p className={styles.text}>{workExperienceData.internshipIcappsText2}</p>

      <h2>{t('technologies.title')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.nextjs')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.nestjs')}</h3>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.sass')}</p>
      <p>{t('technologies.jest')}</p>
      <p>{t('technologies.i18n')}</p>
      <p>{t('technologies.redux')}</p>
      <p>{t('technologies.observable')}</p>
    </Block>
  )
}

export default BlockInternship
