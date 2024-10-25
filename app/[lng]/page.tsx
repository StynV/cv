import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'
import VolunteerWork from '@/components/VolunteerWork/VolunteerWork'
import styles from './page.module.css'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <WorkExperience />
      <Education />
      <VolunteerWork />
      <Footer />
    </main>
  )
}
