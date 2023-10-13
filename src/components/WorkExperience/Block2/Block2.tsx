import YGWYS from '@/components/YGWYS/YGWYS'
import { useTranslation } from 'next-i18next'
import Block from '../Block/Block'
import styles from './block2.module.scss'

const Block2 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('workExperience.block2.title')} period={t('workExperience.block2.period')}>
            <YGWYS html={t('workExperience.block2.text1')} className={`${styles.text} ${styles.textIntro}`} />
            <YGWYS html={t('workExperience.block2.text2')} className={styles.text} />
        </Block>
    )
}

export default Block2
