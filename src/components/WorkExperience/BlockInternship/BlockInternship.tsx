import { useTranslation } from '@app/i18n'
import Block from '../../Block/Block'
import styles from './block-internship.module.scss'

const BlockInternship = async () => {
  const { t } = await useTranslation('common')

  return (
    <Block
      title={t('workExperience.blockInternship.title')}
      period={t('workExperience.blockInternship.period')}
    >
      <p className={styles.text}>{t('workExperience.blockInternship.text')}</p>

      <h2>{t('workExperience.blockDXC.technologies')}</h2>
      <h3 className={styles.linkTitle}>{t('technologies.nestjs')}</h3>
      <h3 className={styles.linkTitle}>{t('technologies.nextjs')}</h3>
      <p>{t('technologies.react')}</p>
      <p>{t('technologies.typescript')}</p>
      <p>{t('technologies.sass')}</p>
      <p>{t('technologies.jest')}</p>
      <p>{t('technologies.i18n')}</p>
      <p>{t('technologies.redux')}</p>
      <p>{t('technologies.observable')}</p>
    </Block>
  )
}

export default BlockInternship
