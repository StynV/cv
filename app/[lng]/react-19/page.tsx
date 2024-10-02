import Transitions from '@/components/poc/React19/Transitions/Transitions'
import BasicForm from '@/components/poc/React19/Actions/BasicForm'
import FormWithActions from '@/components/poc/React19/Actions/FormWithActions'
import styles from './page.module.scss'

export default function React19() {
    return (
        <main className={styles.main}>
            {/* <Transitions /> */}
            {/* <BasicForm /> */}
            <FormWithActions />
        </main>
    )
}