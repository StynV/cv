import { useTranslation } from '@app/i18n'

import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'

import styles from './education.module.scss'

const Education = async () => {
  const { t } = await useTranslation('common')

  return (
    <article
      className={styles.education}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('education.title')}</h1>

      <Block1 />
      <Block2 />
    </article>
  )
}

export default Education
