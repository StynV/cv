import { EducationData } from '@/models/educationData'

import Block from '../../Block/Block'

import styles from './block2.module.scss'

const Block2 = async ({ educationData }: { educationData: EducationData }) => (
  <Block title={educationData.udemyTitle}>
    <p className={styles.text}>{educationData.udemyText1}</p>

    <h2>{educationData.udemyCourses}</h2>
    <h3 className={styles.linkTitle}>{educationData.udemyReactNative}</h3>
    <h3 className={styles.linkTitle}>{educationData.udemyReact}</h3>
    <h3 className={styles.linkTitle}>{educationData.udemyVue}</h3>
    <h3 className={styles.linkTitle}>{educationData.udemyAws}</h3>
  </Block>
)

export default Block2
