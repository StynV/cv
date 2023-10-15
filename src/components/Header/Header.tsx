import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import styles from './header.module.scss'

const Header = () => {
    const { t } = useTranslation('common')

    return (
        <header className={styles.header}>
            <Image
                src="https://drive.google.com/uc?export=view&id=1FJX2VHTNg6VWSHIs8BmkPcr4ZtSeIOHy"
                alt="My image"
                width={200}
                height={300}
                className={styles.img}
            />
            
            <div className={styles.text}>
                <h1 className={styles.title}>{t('name')}</h1>
                <h2 className={styles.function}>{t('function')}</h2>

                <div>
                    <a href={t('mailValue')}>
                    <h3 className={styles.mail}>{t('mailLabel')}</h3>
                    </a>
                    <a href={t('phoneValue')}>
                    <h4 className={styles.phone}>{t('phoneLabel')}</h4>
                    </a>
                </div>

                <div>
                    <h5 className={styles.city}>{t('city')}</h5>
                </div>
            </div>
        </header>
    )
}

export default Header
