'use client'

import { FormEvent, useState } from 'react'

import styles from './index.module.scss'

const BasicForm = () => {
  const [input, setInput] = useState('')
  const [name, setName] = useState('Anonymous user')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('null')

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setInput((event.target as HTMLInputElement).value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('null')

    try {
      setName(input)
      setInput('')
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.main}>
      <p>Current user: {name}</p>

      {loading && <p>Loading...</p>}

      {error === 'null' ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} required />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p>error</p>
      )}
    </div>
  )
}

export default BasicForm
