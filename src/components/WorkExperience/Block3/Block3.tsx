import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block3.module.scss'

const Block3 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('workExperience.block3.title')} period={t('workExperience.block3.period')}>
            <p className={styles.text}>{t('workExperience.block3.text')}</p>

            <h2>{t('workExperience.block2.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.nextjs')}</h3>
            <h3 className={styles.linkTitle}>{t('technologies.react')}</h3>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.jest')}</p>
            <p>{t('technologies.i18n')}</p>
            <p>{t('technologies.redux')}</p>
            <p>{t('technologies.observable')}</p>

        </Block>
    )
}

export default Block3
