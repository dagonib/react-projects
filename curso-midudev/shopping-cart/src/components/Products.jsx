import './Products.css'
import { Product } from './Product'

export function Products ({ products }) {

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    return (
                        <Product 
                            key={product.id} 
                            product={product} 
                        />
                    )
                })}
            </ul>
        </main>
    )
}