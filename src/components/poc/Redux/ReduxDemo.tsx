'use client'

import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import { AppDispatch, RootState } from './store'
import { addTodo } from './todoSlice'

const ReduxDemo = () => {
    const tasks = useSelector((state: RootState) => state.todo.tasks)

    const dispatch = useDispatch<AppDispatch>()

    const formAction = async (formData: FormData) => {
        const textEntry = formData.get("text")

        dispatch(
            addTodo(
                {
                    id: Date.now(),
                    text: textEntry
                }
            )
        )
    }
    
    return (
        <div
            className={styles.main}
        >
            <div className={styles.tasks}>
                {tasks.map(task => {
                    console.log(task)
                    return (
                        <p key={task.id}>{task.text}</p>
                    )
                })}
            </div>

            <form action={formAction}>
                <label>Add task</label>
                <input
                    type='text'
                    name="text"
                    required
                />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default ReduxDemo