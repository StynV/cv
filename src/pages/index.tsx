import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import Meta from '@/components/Meta/Meta'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'
import PersonalProjects from '@/components/PersonalProjects/PersonalProjects'
import styles from '@/styles/Home.module.scss'

const Home = () => (
  <>
    <Meta />

    <main className={styles.main}>
      <Header />
      <Intro />
      <WorkExperience />
      <Education />
      <PersonalProjects />
      <Footer />
    </main>
  </>
)


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home