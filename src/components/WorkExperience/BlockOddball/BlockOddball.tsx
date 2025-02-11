import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'

import Block from '../../Block/Block'

import styles from './block-oddball.module.scss'

const BlockOddball = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={t('workExperience.blockOddball.title')}
      period={t('workExperience.blockOddball.period')}
    >
      <p className={`${styles.text} ${styles.textIntro}`}>
        {t('workExperience.blockOddball.text1')}
      </p>
      <p className={`${styles.text} ${styles.textIntro}`}>
        {t('workExperience.blockOddball.text2')}
      </p>

      <h2 className={styles.blockTitle}>
        {t('workExperience.blockOddball.keyProjects')}
      </h2>

      <h3 className={styles.linkTitle}>
        {t('workExperience.blockOddball.tvc.title')}
      </h3>

      <YGWYS
        html={t('workExperience.blockOddball.tvc.description')}
        className={styles.text}
      />

      <h3 className={styles.linkTitle}>
        {t('workExperience.blockOddball.brightest.title')}
      </h3>

      <p className={styles.text}>
        {t('workExperience.blockOddball.brightest.description')}
      </p>

      <a href="https://linc.legal/" target="_blank">
        <h3 className={styles.linkTitle}>
          {t('workExperience.blockOddball.linc.title')}
        </h3>
      </a>
      <p className={styles.text}>
        {t('workExperience.blockOddball.linc.description')}
      </p>

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
