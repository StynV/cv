import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'

import Block from '../../Block/Block'

import styles from './block2.module.scss'

const Block2 = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <Block title={t('volunteerWork.block2.title')}>
      <p className={styles.text}>{t('volunteerWork.block2.text')}</p>
      <YGWYS html={t('volunteerWork.block2.text2')} className={styles.text} />
    </Block>
  )
}

export default Block2
