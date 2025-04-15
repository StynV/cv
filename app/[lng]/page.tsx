import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Intro from '@/components/Intro/Intro'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import VolunteerWork from '@/components/VolunteerWork/VolunteerWork'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import { performRequest } from '@/datocms/performRequest'
import {
  HOME_PAGE_EDUCATION_QUERY,
  HOME_PAGE_HEADER_QUERY,
  HOME_PAGE_INTRO_QUERY,
  HOME_PAGE_VOLUNTEER_WORK_QUERY,
  HOME_PAGE_WORK_EXPERIENCE_QUERY,
} from '@/datocms/queries'
import { EducationData } from '@/models/educationData'
import { HeaderData } from '@/models/headerData'
import { IntroData } from '@/models/introData'
import { VolunteerWorkData } from '@/models/volunteerWorkData'
import { WorkExperienceData } from '@/models/workExperienceData'

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

  const {
    data: { page: introData },
  } = await performRequest<{ data: { page: IntroData } }>({
    query: HOME_PAGE_INTRO_QUERY(lng),
  })

  const {
    data: { page: workExperienceData },
  } = await performRequest<{ data: { page: WorkExperienceData } }>({
    query: HOME_PAGE_WORK_EXPERIENCE_QUERY(lng),
  })

  const {
    data: { page: educationData },
  } = await performRequest<{ data: { page: EducationData } }>({
    query: HOME_PAGE_EDUCATION_QUERY(lng),
  })

  const {
    data: { page: volunteerWorkData },
  } = await performRequest<{ data: { page: VolunteerWorkData } }>({
    query: HOME_PAGE_VOLUNTEER_WORK_QUERY(lng),
  })

  return (
    <main className={styles.main}>
      <Header lng={lng} headerData={headerData} />
      <LanguageSwitcher currentLng={lng} />
      <Intro lng={lng} introData={introData} />
      <WorkExperience lng={lng} workExperienceData={workExperienceData} />
      <Education lng={lng} educationData={educationData} />
      <VolunteerWork lng={lng} volunteerWorkData={volunteerWorkData} />
      <Footer />
    </main>
  )
}
