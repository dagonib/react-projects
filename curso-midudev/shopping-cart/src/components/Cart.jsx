import { useId } from 'react'
import { useCart } from '../hooks/useCart.jsx'
import { CartItem } from './CartItem.jsx'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart () {
    const cartCheckBosId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBosId}>
                <CartIcon />
            </label>
            <input id={cartCheckBosId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(cartItem => (
                        <CartItem 
                            key={cartItem.id}
                            addToCart={() => addToCart(cartItem)}
                            {...cartItem} 
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}