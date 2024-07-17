import YGWYS from '@/components/YGWYS/YGWYS'
import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block-two-point-o.module.scss'

const BlockTwoPointO = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('workExperience.blockTwoPointO.title')} period={t('workExperience.blockTwoPointO.period')}>
            <YGWYS html={t('workExperience.blockTwoPointO.text1')} className={`${styles.text} ${styles.textIntro}`} />
            <p className={`${styles.text} ${styles.textIntro}`}>{t('workExperience.blockTwoPointO.text2')}</p>

            <h3 className={styles.linkTitle}>{t('workExperience.blockTwoPointO.beat.title')}</h3>
            <YGWYS html={t('workExperience.blockTwoPointO.beat.description')} className={styles.text} />

            <h2>{t('technologies.title')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
            <p>{t('technologies.nextjs')}</p>
            <p>{t('technologies.remix')}</p>
            <p>{t('technologies.vite')}</p>
            <p>{t('technologies.gatsby')}</p>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.sass')}</p>

            <p>{t('technologies.tailwind')}</p>

            <h3 className={styles.linkTitle}>{t('technologies.cms')}</h3>
            <p>{t('technologies.contentful')}</p>
            <p>{t('technologies.sanity')}</p>
        </Block>
    )
}

export default BlockTwoPointO
