import YGWYS from '@/components/YGWYS/YGWYS'
import Block from '../../Block/Block'
import styles from './block-dxc.module.scss'
import { useTranslation } from '@app/i18n'

const BlockDXC = async () => {
    const { t } = await useTranslation('common')

    return (
        <Block title={t('workExperience.blockDXC.title')} period={t('workExperience.blockDXC.period')}>
            <YGWYS html={t('workExperience.blockDXC.text1')} className={`${styles.text} ${styles.textIntro}`} />
            <YGWYS html={t('workExperience.blockDXC.text2')} className={styles.text} />

            <h2>{t('workExperience.blockDXC.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.react')}</h3>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.reactQuery')}</p>
            <p>{t('technologies.jest')}</p>
            <p>{t('technologies.cypress')}</p>
            <p>{t('technologies.i18n')}</p>
            <p>{t('technologies.context')}</p>
            <p>{t('technologies.webComponents')}</p>
            <p>{t('technologies.storybook')}</p>
            <p>{t('technologies.sass')}</p>

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

export default BlockDXC
