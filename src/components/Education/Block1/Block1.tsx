import { EducationData } from '@/models/educationData'

import Block from '../../Block/Block'

import styles from './block1.module.scss'

const Block1 = async ({ educationData }: { educationData: EducationData }) => (
  <Block title={educationData.kdgTitle} period={educationData.kdgPeriod}>
    <p className={styles.text}>
      <b>{educationData.kdgText1}</b>
    </p>
    <p className={`${styles.text} ${styles.textIntro}`}>
      {educationData.kdgText2}
    </p>
  </Block>
)

export default Block1
