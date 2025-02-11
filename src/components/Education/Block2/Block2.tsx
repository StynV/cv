import { useTranslation } from '@app/i18n'

import Block from '../../Block/Block'

import styles from './block2.module.scss'

const Block2 = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <Block title={t('education.block2.title')}>
      <p className={styles.text}>{t('education.block2.text1')}</p>

      <h2>{t('education.block2.technologies')}</h2>
      <h3 className={styles.linkTitle}>{t('education.block2.react')}</h3>
      <h3 className={styles.linkTitle}>{t('education.block2.vue')}</h3>
      <h3 className={styles.linkTitle}>{t('education.block2.aws')}</h3>
    </Block>
  )
}

export default Block2
