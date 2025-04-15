import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'
import { WorkExperienceData } from '@/models/workExperienceData'

import Block from '../../Block/Block'

import styles from './block-oddball.module.scss'

const BlockOddball = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={workExperienceData.oddballTitle}
      period={workExperienceData.oddballPeriod}
    >
      <p className={`${styles.text} ${styles.textIntro}`}>
        {workExperienceData.oddballText1}
      </p>
      <p className={`${styles.text} ${styles.textIntro}`}>
        {workExperienceData.oddballText2}
      </p>

      <h2 className={styles.blockTitle}>
        {workExperienceData.oddballKeyProjects}
      </h2>

      <h3 className={styles.linkTitle}>
        {workExperienceData.oddballTheValueChainTitle}
      </h3>

      <p className={styles.text}>
        {workExperienceData.oddballTheValueChainDescription}
      </p>

      <h3 className={styles.linkTitle}>
        {workExperienceData.oddballBrightestTitle}
      </h3>

      <p className={styles.text}>
        {workExperienceData.oddballBrightestDescription}
      </p>

      <a href="https://linc.legal/" target="_blank">
        <h3 className={styles.linkTitle}>
          {workExperienceData.oddballLincTitle}
        </h3>
      </a>
      <p className={styles.text}>{workExperienceData.oddballLincDescription}</p>

      <h2>{t('workExperience.blockOddball.technologies')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <p>{t('technologies.nextjs')}</p>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.jest')}</p>
      <p>{t('technologies.grid')}</p>
      <p>{t('technologies.sass')}</p>

      <h3 className={styles.linkTitle}>{t('technologies.cms')}</h3>
      <p>{t('technologies.strapi')}</p>
      <p>{t('technologies.awsS3')}</p>
      <h3 className={styles.linkTitle}>{t('technologies.hosting')}</h3>
      <h4>{t('technologies.cloud')}</h4>
      <p>{t('technologies.appEngine')}</p>
      <p>{t('technologies.sql')}</p>
      <p>{t('technologies.cloudBuild')}</p>
      <p>{t('workExperience.blockOddball.responsibility')}</p>
      <h4 className={styles.linkTitle}>{t('technologies.mail')}</h4>
    </Block>
  )
}

export default BlockOddball
