import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
        <p>{t('name')}</p>
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