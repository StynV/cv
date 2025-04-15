import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'
import { WorkExperienceData } from '@/models/workExperienceData'

import Block from '../../Block/Block'

import styles from './block-two-point-o.module.scss'

const BlockTwoPointO = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={workExperienceData.twoPointOTitle}
      period={workExperienceData.twoPointOPeriod}
    >
      <YGWYS
        html={workExperienceData.twoPointOText1}
        className={`${styles.text} ${styles.textIntro}`}
      />

      <YGWYS
        html={workExperienceData.twoPointOBeatTitle}
        className={styles.linkTitle}
      />
      <YGWYS
        html={workExperienceData.twoPointOBeatDescription}
        className={styles.text}
      />

      <YGWYS
        html={workExperienceData.twoPointOBeameryTitle}
        className={styles.linkTitle}
      />
      <YGWYS
        html={workExperienceData.twoPointOBeameryDescription}
        className={styles.text}
      />

      <h3 className={styles.linkTitle}>
        {workExperienceData.twoPointOTroubleshootingPageTitle}
      </h3>
      <p className={styles.text}>
        {workExperienceData.twoPointOTroubleshootingPageDescription}
      </p>

      <h3 className={styles.linkTitle}>
        {workExperienceData.twoPointOPocTitle}
      </h3>
      <p className={styles.text}>
        {workExperienceData.twoPointOPocDescription}
      </p>

      <h2>{t('technologies.title')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <p>{t('technologies.nextjs')}</p>
      <p>{t('technologies.remix')}</p>
      <p>{t('technologies.vite')}</p>
      <p>{t('technologies.gatsby')}</p>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.sass')}</p>

      <p>{t('technologies.tailwind')}</p>
      <p>{t('technologies.tailwindVA')}</p>

      <h3 className={styles.linkTitle}>{t('technologies.cms')}</h3>
      <p>{t('technologies.contentful')}</p>
      <p>{t('technologies.sanity')}</p>
    </Block>
  )
}

export default BlockTwoPointO
