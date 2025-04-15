import { useTranslation } from '@app/i18n'

import { EducationData } from '@/models/educationData'

import Block1 from './Block1/Block1'
import Block2 from './Block2/Block2'

import styles from './education.module.scss'

const Education = async ({
  lng,
  educationData,
}: {
  lng: string
  educationData: EducationData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <article
      className={styles.education}
      itemScope
      itemType="https://schema.org/Article"
    >
      <h1 className={styles.title}>{t('education.title')}</h1>

      <Block1 educationData={educationData} />
      <Block2 educationData={educationData} />
    </article>
  )
}

export default Education
