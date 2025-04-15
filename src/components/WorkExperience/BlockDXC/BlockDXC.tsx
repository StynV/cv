import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'
import { WorkExperienceData } from '@/models/workExperienceData'

import Block from '../../Block/Block'

import styles from './block-dxc.module.scss'

const BlockDXC = async ({
  lng,
  workExperienceData,
}: {
  lng: string
  workExperienceData: WorkExperienceData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={workExperienceData.dxcFdsTitle}
      period={workExperienceData.dxcFdsPeriod}
    >
      <YGWYS
        html={workExperienceData.dxcFdsText1}
        className={`${styles.text} ${styles.textIntro}`}
      />
      <YGWYS html={workExperienceData.dxcFdsText2} className={styles.text} />
      <p className={styles.text}>{workExperienceData.dxcFdsText3}</p>

      <h2>{t('technologies.title')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.react')}</h3>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.reactQuery')}</p>
      <p>{t('technologies.jest')}</p>
      <p>{t('technologies.cypress')}</p>
      <p>{t('technologies.i18n')}</p>
      <p>{t('technologies.context')}</p>
      <p>{t('technologies.webComponents')}</p>
      <p>{t('technologies.storybook')}</p>
      <p>{t('technologies.sass')}</p>

      <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.spring')}</h3>
      <p>{t('technologies.hibernate')}</p>
      <p>{t('technologies.junit')}</p>
      <p>{t('technologies.mockito')}</p>

      <h3>{t('technologies.oracle')}</h3>
      <h3>{t('technologies.aws')}</h3>
      <p>{t('technologies.sns')}</p>
      <p>{t('technologies.sqs')}</p>
      <p>{t('technologies.s3')}</p>
      <h3 className={styles.linkTitle}>{t('technologies.figma')}</h3>
    </Block>
  )
}

export default BlockDXC
