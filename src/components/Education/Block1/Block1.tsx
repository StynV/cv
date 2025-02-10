import { useTranslation } from '@app/i18n'

import Block from '../../Block/Block'

import styles from './block1.module.scss'

const Block1 = async () => {
  const { t } = await useTranslation('common')

  return (
    <Block
      title={t('education.block1.title')}
      period={t('education.block1.period')}
    >
      <p className={styles.text}>
        <b>{t('education.block1.text1')}</b>
      </p>
      <p className={`${styles.text} ${styles.textIntro}`}>
        {t('education.block1.text2')}
      </p>

      <h2>{t('education.block1.technologies')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <h3>{t('technologies.vue')}</h3>
      <h3>{t('technologies.react')}</h3>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.jest')}</p>
      <p>{t('technologies.i18n')}</p>
      <p>{t('technologies.redux')}</p>

      <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
      <h3>{t('technologies.nodejs')}</h3>
      <h4>{t('technologies.spring')}</h4>
      <p>{t('technologies.hibernate')}</p>
      <p>{t('technologies.junit')}</p>
      <p>{t('technologies.mockito')}</p>
      <h4 className={styles.linkTitle}>{t('technologies.uml')}</h4>
    </Block>
  )
}

export default Block1
