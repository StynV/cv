import {
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRemix,
  SiSass,
  SiSpring,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons'

import styles from './intro.module.scss'

const icons = [
  {
    icon: <SiReact className={styles.icon} />,
    label: 'React',
  },
  {
    icon: <SiNextdotjs className={styles.icon} />,
    label: 'NextJS',
  },
  {
    icon: <SiRemix className={styles.icon} />,
    label: 'Remix',
  },
  {
    icon: <SiTypescript className={styles.icon} />,
    label: 'Typescript',
  },
  {
    icon: <SiTailwindcss className={styles.icon} />,
    label: 'Tailwind CSS',
  },
  {
    icon: <SiSass className={styles.icon} />,
    label: 'SASS',
  },
  {
    icon: <SiStorybook className={styles.icon} />,
    label: 'Storybook',
  },
  {
    icon: <SiVercel className={styles.icon} />,
    label: 'Vercel',
  },
  {
    icon: <SiGithub className={styles.icon} />,
    label: 'GitHub',
  },
  {
    icon: <SiSpring className={styles.icon} />,
    label: 'Java Spring',
  },
  {
    icon: <SiNodedotjs className={styles.icon} />,
    label: 'NodeJS',
  },
]

export default icons
