import Image from 'next/image'
import { useTranslation } from '@app/i18n'
import styles from './header.module.scss'

const Header = async () => {
    const { t } = await useTranslation('common')

    return (
        <header className={styles.header}>
            <Image
                src="https://drive.google.com/uc?export=view&id=1uIzeTvhRc2BX3aZ3zKSbDvKkBHNZkVNn"
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
                    <a
                        href="https://www.linkedin.com/in/styn-vercauteren-96918018b/"
                        target="_blank"
                        rel="noreferrer"
                        itemProp='author'
                    >
                        <Image
                            src={'/images/LinkedIn_logo.svg'}
                            alt={'Source code'}
                            width={100}
                            height={70}
                            className={styles.linkedinLogo}
                        />
                    </a>
                </div>

                <div>
                    <h5 className={styles.city}>{t('city')}</h5>
                </div>

                <div>
                    <a href='https://drive.google.com/file/d/1GNA3IrEMLBXrP5DkZCpFXsZoQ2MRWC_m/view?usp=sharing' target="_blank">
                        <h6 className={styles.city}>{t('pdf')}</h6>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
