import { products as initialProducts} from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import { Footer } from "./components/Footer"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const {filterProducts} = useFilters()
  const [products] = useState(initialProducts)
  
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <main>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </main>
    </CartProvider>
  )
}

export default App
