import { useTranslation } from '@app/i18n'

import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'

import styles from './education.module.scss'

const Education = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng)

  return (
    <article
      className={styles.education}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('education.title')}</h1>

      <Block1 lng={lng} />
      <Block2 lng={lng} />
    </article>
  )
}

export default Education
