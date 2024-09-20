import { useEffect } from "react"

const SlowProduct = ({ product }: { product: string }) => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => { console.log("sleep"), sleep(1000) }, [])
    
    return (
        <li>Product {product}</li>
    )
}

export default SlowProduct