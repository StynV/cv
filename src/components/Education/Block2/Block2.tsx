import YGWYS from '@/components/YGWYS/YGWYS'
import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block2.module.scss'

const Block2 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('education.block2.title')}>
            <p className={styles.text}>{t('education.block2.text1')}</p>

            <h2>{t('education.block2.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('education.block2.react')}</h3>
            <h3 className={styles.linkTitle}>{t('education.block2.vue')}</h3>
            <h3 className={styles.linkTitle}>{t('education.block2.aws')}</h3>

        </Block>
    )
}

export default Block2
