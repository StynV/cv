import Animations from '@/components/poc/Motion/Animations'
import styles from './page.module.scss'
import BasicsOfMotion from '@/components/poc/Tutorial/BasicsOfMotion/BasicsOfMotion'
import Gestures from '@/components/poc/Tutorial/Gestures/Gestures'
import AnimationControls from '@/components/poc/Tutorial/AnimationControls/AnimationControls'
import ViewBasedAnimations from '@/components/poc/Tutorial/ViewBasedAnimations/ViewBasedAnimations'
import ScrollBasedAnimations from '@/components/poc/Tutorial/ScrollBasedAnimations/ScrollBasedAnimations'

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
