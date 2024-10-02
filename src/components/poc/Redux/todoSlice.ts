import { createSlice } from "@reduxjs/toolkit"

type Todo = {
    id: number,
    text: string
}

type InitialStateProps = {
    tasks: Array<Todo>
}

const initialState: InitialStateProps = {
    tasks: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer