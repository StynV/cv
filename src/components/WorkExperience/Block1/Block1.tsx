import YGWYS from '@/components/YGWYS/YGWYS'
import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block1.module.scss'

const Block1 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('workExperience.block1.title')} period={t('workExperience.block1.period')}>
            <YGWYS html={t('workExperience.block1.text1')} className={`${styles.text} ${styles.textIntro}`} />
            <p className={`${styles.text} ${styles.textIntro}`}>{t('workExperience.block1.text2')}</p>
            <p className={`${styles.text} ${styles.textIntro}`}>{t('workExperience.block1.text3')}</p>

            <h2 className={styles.blockTitle}>{t('workExperience.block1.keyProjects')}</h2>

            <a href="https://thevaluechain.eu/en" target="_blank">
                <h3 className={styles.linkTitle}>{t('workExperience.block1.tvc.title')}</h3>
            </a>
            <YGWYS html={t('workExperience.block1.tvc.description')} className={styles.text} />

            <a href="https://brightest.be/" target="_blank">
                <h3 className={styles.linkTitle}>{t('workExperience.block1.brightest.title')}</h3>
            </a>
            <YGWYS html={t('workExperience.block1.brightest.description')} className={styles.text} />

            <a href="https://linc.legal/" target="_blank">
                <h3 className={styles.linkTitle}>{t('workExperience.block1.linc.title')}</h3>
            </a>
            <p className={styles.text}>{t('workExperience.block1.linc.description')}</p>

            <h2>{t('workExperience.block1.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
            <p>{t('technologies.nextjs')}</p>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.jest')}</p>
            <p>{t('technologies.grid')}</p>
            <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
            <p>{t('technologies.strapi')}</p>
            <p>{t('technologies.awsS3')}</p>
            <h3 className={styles.linkTitle}>{t('technologies.hosting')}</h3>
            <h4>{t('technologies.cloud')}</h4>
            <p>{t('technologies.appEngine')}</p>
            <p>{t('technologies.sql')}</p>
            <p>{t('technologies.cloudBuild')}</p>
            <h4 className={styles.linkTitle}>{t('technologies.mail')}</h4>
            <p className={styles.linkTitle}>{t('workExperience.block1.responsibility')}</p>

        </Block>
    )
}

export default Block1
