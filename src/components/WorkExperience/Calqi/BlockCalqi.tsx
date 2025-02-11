import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'

import Block from '../../Block/Block'

import styles from './block-calqi.module.scss'

const BlockCalqi = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={t('workExperience.blockCalqi.title')}
      period={t('workExperience.blockCalqi.period')}
    >
      <YGWYS
        html={t('workExperience.blockCalqi.text1')}
        className={`${styles.text} ${styles.textIntro}`}
      />
      <p className={`${styles.text} ${styles.textIntro}`}>
        {t('workExperience.blockCalqi.text2')}
      </p>
      <p className={`${styles.text} ${styles.textIntro}`}>
        {t('workExperience.blockCalqi.text3')}
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
