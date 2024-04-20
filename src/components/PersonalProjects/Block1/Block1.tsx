import { useTranslation } from 'next-i18next'
import Block from '../../Block/Block'
import styles from './block1.module.scss'

const Block1 = () => {
    const { t } = useTranslation('common')

    return (
        <Block title={t('personalProjects.block1.title')}>
            <p className={styles.text}>{t('personalProjects.block1.text')}</p>

            <h2>{t('personalProjects.block1.technologies')}</h2>
            <h3 className={styles.linkTitle}>{t('technologies.frontend')}</h3>
            <p>{t('technologies.nextjs')}</p>
            <p>{t('technologies.typescript')}</p>
            <p>{t('technologies.tailwind')}</p>
            <p>{t('technologies.graphql')}</p>
            <p>{t('technologies.vercel')}</p>
            <h3 className={styles.linkTitle}>{t('technologies.backend')}</h3>
            <p>{t('technologies.datocms')}</p>
        </Block>
    )
}

export default Block1
