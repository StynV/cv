import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'
import { WorkExperienceData } from '@/models/workExperienceData'

import Block from '../../Block/Block'

import styles from './block-calqi.module.scss'

const BlockCalqi = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={workExperienceData.calqiTitle}
      period={workExperienceData.calqiPeriod}
    >
      <YGWYS
        html={workExperienceData.calqiText1}
        className={`${styles.text} ${styles.textIntro}`}
      />
      <p className={`${styles.text} ${styles.textIntro}`}>
        {workExperienceData.calqiText2}
      </p>
      <p className={`${styles.text} ${styles.textIntro}`}>
        {workExperienceData.calqiText3}
      </p>

      <h2>{t('technologies.title')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <p>{t('technologies.react-vite')}</p>
      <p>{t('technologies.tailwind')}</p>
      <p>{t('technologies.tanstack')}</p>

      <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
      <p>{t('technologies.php')}</p>
      <p>{t('technologies.mysql')}</p>
    </Block>
  )
}

export default BlockCalqi
