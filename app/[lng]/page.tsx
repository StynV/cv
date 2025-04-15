import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import VolunteerWork from '@/components/VolunteerWork/VolunteerWork'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import { performRequest } from '@/datocms/performRequest'
import { HOME_PAGE_HEADER_QUERY } from '@/datocms/queries'
import { HeaderData } from '@/models/headerData'

import styles from './page.module.css'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const {
    data: { page: headerData },
  } = await performRequest<{ data: { page: HeaderData } }>({
    query: HOME_PAGE_HEADER_QUERY(lng),
  })

  return (
    <main className={styles.main}>
      <Header lng={lng} headerData={headerData} />
      <LanguageSwitcher currentLng={lng} />
      <Intro lng={lng} />
      <WorkExperience lng={lng} />
      <Education lng={lng} />
      <VolunteerWork lng={lng} />
      <Footer />
    </main>
  )
}
