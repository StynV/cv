import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'

import Block from '../../Block/Block'

import styles from './block1.module.scss'

const Block1 = async () => {
  const { t } = await useTranslation('common')

  return (
    <Block title={t('volunteerWork.block1.title')}>
      <p className={styles.text}>{t('volunteerWork.block1.text')}</p>
      <p className={styles.text}>{t('volunteerWork.block1.text2')}</p>
      <p className={styles.text}>{t('volunteerWork.block1.text3')}</p>
      <p className={styles.text}>{t('volunteerWork.block1.text4')}</p>
      <p className={styles.text}>{t('volunteerWork.block1.text5')}</p>
      <p className={styles.text}>{t('volunteerWork.block1.text6')}</p>

      <YGWYS html={t('volunteerWork.block1.text7')} className={styles.text} />

      <h2>{t('volunteerWork.block1.technologies')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
      <p>{t('technologies.nextjs')}</p>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.tailwind')}</p>
      <p>{t('technologies.graphql')}</p>
      <p>{t('technologies.vercel')}</p>
      <h3 className={styles.linkTitle}>{t('technologies.cms')}</h3>
      <p>{t('technologies.datocms')}</p>
    </Block>
  )
}

export default Block1
