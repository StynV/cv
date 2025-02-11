import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import VolunteerWork from '@/components/VolunteerWork/VolunteerWork'
import WorkExperience from '@/components/WorkExperience/WorkExperience'

import styles from './page.module.css'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  return (
    <main className={styles.main}>
      <Header lng={lng} />
      <Intro lng={lng} />
      <WorkExperience lng={lng} />
      <Education lng={lng} />
      <VolunteerWork lng={lng} />
      <Footer />
    </main>
  )
}
