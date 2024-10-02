'use client'

import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import { AppDispatch, RootState } from './store'
import { addTodo, deleteTodo } from './todoSlice'

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
    
    const handleButtonClick = async (id: number) => {
        dispatch(
            deleteTodo(
                {
                    id: id,
                }
            )
        )
    }

    return (
        <div
            className={styles.main}
        >
            <form
                action={formAction}
                className={styles.form}
            >
                <label>Add task</label>
                <input
                    type='text'
                    name="text"
                    required
                    className={styles.input}
                />

                <button
                    type='submit'
                    className={styles.button}
                >Add</button>
            </form>

            <div className={styles.tasks}>
                {tasks.map(task =>  (
                    <div key={task.id} className={styles.item}>
                        <p>{task.text}</p>
                        <button
                            onClick={() => handleButtonClick(task.id)}
                            className={styles.removeButton}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReduxDemo