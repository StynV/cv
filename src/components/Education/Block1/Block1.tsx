import { useTranslation } from '@app/i18n'

import Block from '../../Block/Block'

import styles from './block1.module.scss'

const Block1 = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

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
    </Block>
  )
}

export default Block1
