import { useTranslation } from '@app/i18n'

import YGWYS from '@/components/YGWYS/YGWYS'
import { VolunteerWorkData } from '@/models/volunteerWorkData'

import Block from '../../Block/Block'

import styles from './block1.module.scss'

const Block1 = async ({
  lng,
  volunteerWorkData,
}: {
  lng: string
  volunteerWorkData: VolunteerWorkData
}) => {
  const { t } = await useTranslation(lng)

  return (
    <Block
      title={volunteerWorkData.iamTitle}
      period={volunteerWorkData.iamPeriod}
    >
      <p className={styles.text}>{volunteerWorkData.iamText}</p>
      <p className={styles.text}>{volunteerWorkData.iamText2}</p>
      <p className={styles.text}>{volunteerWorkData.iamText3}</p>
      <p className={styles.text}>{volunteerWorkData.iamText4}</p>
      <p className={styles.text}>{volunteerWorkData.iamText5}</p>
      <p className={styles.text}>{volunteerWorkData.iamText6}</p>

      <YGWYS html={volunteerWorkData.iamText7} className={styles.text} />

      <h2>{t('volunteerWork.technologies')}</h2>
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
