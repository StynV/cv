import styles from '@/styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import Meta from '@/components/Meta/Meta'
import WorkExperience from '@/components/WorkExperience/WorkExperience'

const Home = () => {
  const { t } = useTranslation('common')
  
  return (
    <>
      <Meta />
      
      <main className={styles.main}>
        <Header />
        <Intro />
        <WorkExperience />
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