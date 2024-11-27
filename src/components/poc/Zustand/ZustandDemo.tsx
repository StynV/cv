'use client'

import useCartStore, { Item } from './advancedStore'
import useStore from './store'

import styles from './index.module.scss'

const ZustandDemo = () => {
  const { count, increment, decrement } = useStore()

  const items = useCartStore(state => state.items)
  const totalPrice = useCartStore(state => state.totalPrice())

  const newItem: Item = {
    id: Date.now(),
    name: 'new item',
    price: 10,
  }

  return (
    <div className={styles.main}>
      <div className={styles.counter}>
        <h1>Counter</h1>
        <div className={styles.items}>
          <button onClick={decrement} className={styles.btn}>
            Decrement
          </button>
          <span>{count}</span>
          <button onClick={increment} className={styles.btn}>
            Increment
          </button>
        </div>
      </div>

      <div className={styles.cart}>
        <h1>Cart</h1>
        <button onClick={() => useCartStore.getState().addItem(newItem)}>
          Add item
        </button>

        <ul className={styles.items}>
          {items.map(item => (
            <li key={item.id} className={styles.item}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button
                className={styles.btn}
                onClick={() => useCartStore.getState().removeItem(item.id)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <p>Total price: {totalPrice}</p>
      </div>
    </div>
  )
}

export default ZustandDemo
