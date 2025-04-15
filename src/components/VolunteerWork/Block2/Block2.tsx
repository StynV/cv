import YGWYS from '@/components/YGWYS/YGWYS'
import { VolunteerWorkData } from '@/models/volunteerWorkData'

import Block from '../../Block/Block'

import styles from './block2.module.scss'

const Block2 = async ({
  volunteerWorkData,
}: {
  volunteerWorkData: VolunteerWorkData
}) => {
  return (
    <Block title={volunteerWorkData.reactBrusselsTitle}>
      <p className={styles.text}>{volunteerWorkData.reactBrusselsText}</p>
      <YGWYS
        html={volunteerWorkData.reactBrusselsText2}
        className={styles.text}
      />
    </Block>
  )
}

export default Block2
