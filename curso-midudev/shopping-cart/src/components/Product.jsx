import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export function Product ({ product }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
       
    const isProductInCart = checkProductInCart(product)

    return (
        <li>
            <img
                src={product.thumbnail} 
                alt={product.title}
            />
            <div>
                <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
                <button 
                style={{ backgroundColor: isProductInCart ? '#e0a5a5' : 'rgb(160 199 224)'}}
                onClick={() => {
                    isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)}}
                >
                    {
                        isProductInCart
                            ? <RemoveFromCartIcon />
                            : <AddToCartIcon />
                    }
                    
                </button>
            </div>
        </li>
    )
}