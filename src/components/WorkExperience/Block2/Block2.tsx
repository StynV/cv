import YGWYS from '@/components/YGWYS/YGWYS'
import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block2.module.scss'

const Block2 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('workExperience.block2.title')} period={t('workExperience.block2.period')}>
            <YGWYS html={t('workExperience.block2.text1')} className={`${styles.text} ${styles.textIntro}`} />
            <YGWYS html={t('workExperience.block2.text2')} className={styles.text} />

            <h2>{t('workExperience.block2.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.react')}</h3>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.reactQuery')}</p>
            <p>{t('technologies.jest')}</p>
            <p>{t('technologies.cypress')}</p>
            <p>{t('technologies.i18n')}</p>
            <p>{t('technologies.context')}</p>
            <p>{t('technologies.webComponents')}</p>
            <p>{t('technologies.storybook')}</p>

            <h3 className={styles.linkTitle}>{t('technologies.spring')}</h3>
            <p>{t('technologies.rest')}</p>
            <p>{t('technologies.hibernate')}</p>
            <p>{t('technologies.junit')}</p>
            <p>{t('technologies.mockito')}</p>

            <h3 className={styles.linkTitle}>{t('technologies.oracle')}</h3>
            <h3 className={styles.linkTitle}>{t('technologies.aws')}</h3>
            <p>{t('technologies.sns')}</p>
            <p>{t('technologies.sqs')}</p>
            <p>{t('technologies.s3')}</p>
            <h3 className={styles.linkTitle}>{t('technologies.figma')}</h3>

        </Block>
    )
}

export default Block2
