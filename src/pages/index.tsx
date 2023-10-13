import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

const Home = () => {
  const { t } = useTranslation('common')
  
  return (
    <>
      <Head>
        <title>CV - Styn Vercauteren</title>
        <meta name="description" content="Created by Styn Vercauteren" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <header className={styles.header}>
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
                <h5 className={styles.street}>{t('street')}</h5>
                <h6 className={styles.city}>{t('city')}</h6>
            </div>
          </div>

          <Image
            src="https://drive.google.com/uc?export=view&id=1FJX2VHTNg6VWSHIs8BmkPcr4ZtSeIOHy"
            alt="My image"
            width={200}
            height={300}
            className={styles.img}
          />
        </header>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      },
    }
}

export default Home