import Animations from '@/components/poc/Motion/Animations'
import AnimationControls from '@/components/poc/Tutorial/AnimationControls/AnimationControls'
import BasicsOfMotion from '@/components/poc/Tutorial/BasicsOfMotion/BasicsOfMotion'
import Gestures from '@/components/poc/Tutorial/Gestures/Gestures'
import ScrollBasedAnimations from '@/components/poc/Tutorial/ScrollBasedAnimations/ScrollBasedAnimations'
import ViewBasedAnimations from '@/components/poc/Tutorial/ViewBasedAnimations/ViewBasedAnimations'

import styles from './page.module.scss'

export default function AnimationsPOC() {
  return (
    <main className={styles.main}>
      <Animations />

      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollBasedAnimations />
    </main>
  )
}
