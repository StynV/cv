import Transitions from '@/components/poc/React19/Transitions/Transitions'
import BasicForm from '@/components/poc/React19/Actions/BasicForm'
import styles from './page.module.scss'
import FormWithActions from '@/components/poc/React19/Actions/FormWithActions'

export default function React19() {
    return (
        <main className={styles.main}>
            {/* <Transitions /> */}
            {/* <BasicForm /> */}
            <FormWithActions />
        </main>
    )
}