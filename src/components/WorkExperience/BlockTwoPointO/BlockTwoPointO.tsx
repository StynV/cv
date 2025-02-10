import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'

import Block from '../../Block/Block'

import styles from './block-two-point-o.module.scss'

const BlockTwoPointO = async () => {
  const { t } = await useTranslation('common')

  return (
    <Block
      title={t('workExperience.blockTwoPointO.title')}
      period={t('workExperience.blockTwoPointO.period')}
    >
      <YGWYS
        html={t('workExperience.blockTwoPointO.text1')}
        className={`${styles.text} ${styles.textIntro}`}
      />

      <h2 className={styles.blockTitle}>
        {t('workExperience.blockOddball.keyProjects')}
      </h2>

      <YGWYS
        html={t('workExperience.blockTwoPointO.beat.title')}
        className={styles.linkTitle}
      />
      <YGWYS
        html={t('workExperience.blockTwoPointO.beat.description')}
        className={styles.text}
      />

      <YGWYS
        html={t('workExperience.blockTwoPointO.beamery.title')}
        className={styles.linkTitle}
      />
      <YGWYS
        html={t('workExperience.blockTwoPointO.beamery.description')}
        className={styles.text}
      />

      <h3 className={styles.linkTitle}>
        {t('workExperience.blockTwoPointO.troubleshootingPage.title')}
      </h3>
      <p className={styles.text}>
        {t('workExperience.blockTwoPointO.troubleshootingPage.description')}
      </p>

      <h3 className={styles.linkTitle}>
        {t('workExperience.blockTwoPointO.poc.title')}
      </h3>
      <p className={styles.text}>
        {t('workExperience.blockTwoPointO.poc.description')}
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
