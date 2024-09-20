'use client'

import { memo } from 'react'
import SlowProduct from './SlowProduct'

// Wrapped in memo so it only renders once
const Products = memo(function() {
    const products = new Array(15000).fill(null).map(() => ({
        name: "test"
    }))

    let productsList = products.map((product, id) => (
        <SlowProduct key={id} product={product.name} />
    ))

    return (
        <>
            <h1>Products page</h1>
            <ul>{productsList}</ul>
        </>
    )
})

export default Products