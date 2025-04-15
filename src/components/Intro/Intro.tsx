import Marquee from 'react-fast-marquee'

import { IntroData } from '@/models/introData'

import YGWYS from '../YGWYS/YGWYS'
import icons from './icons'

import styles from './intro.module.scss'

const Intro = async ({
  lng,
  introData,
}: {
  lng: string
  introData: IntroData
}) => {
  return (
    <article
      className={styles.intro}
      itemScope
      itemType="https://schema.org/Article"
    >
      <p className={styles.text}>{introData.intro1}</p>
      <YGWYS html={introData.intro2} className={styles.text} />
      <p className={styles.text}>{introData.intro3}</p>

      <Marquee
        autoFill
        pauseOnHover
        speed={30}
        gradient
        className={styles.icons}
      >
        {icons.map(icon => (
          <div key={icon.label} className={styles.marqueeIcon}>
            <span>{icon.icon}</span>
          </div>
        ))}
      </Marquee>
    </article>
  )
}

export default Intro
