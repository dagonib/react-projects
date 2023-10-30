import { Filters } from "./Filters";
import './header.css'

export function Header () {
    return (
        <header>
            <h1>Shopping Cart</h1>
            <Filters />
        </header>
    )
}