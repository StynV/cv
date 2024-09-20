'use client'

import { useState, useTransition } from 'react'
import Products from './Products'
import styles from './index.module.scss'

const Transitions = () => {
    const [tab, setTab] = useState('home')
    const [isPending, startTransition] = useTransition()

    const switchTab = (tab: string) => {
        // whatever statechange happens here, will be marked as a lower priority
        // or as an interruptable state change
        // Products = slow, so starting it & moving to another will stop Products
        startTransition(() => {
            setTab(tab)
        })
    }

    const setStyles = (thisTab: string) => {
        return {
            backgroundColor: tab === thisTab ? '#262626' : 'white',
            color: tab === thisTab ? 'white' : 'black'
        }
    }

    return (
        <main className={styles.main}>
            <nav>
                <button
                    onClick={() => switchTab('home')}
                    style={setStyles('home')}
                >
                    Home
                </button>
                <button
                    onClick={() => switchTab('products')}
                    style={setStyles('products')}
                >
                    Products
                </button>
                <button
                    onClick={() => switchTab('about')}
                    style={setStyles('about')}
                >
                    About
                </button>
            </nav>

            <div>
                {isPending && <p>Loading...</p>}
                {tab === "home" && <h1>Home page</h1>}
                {tab === "products" && <Products />}
                {tab === "about" && <h1>About page</h1>}
            </div>
        </main>
    )
}

export default Transitions