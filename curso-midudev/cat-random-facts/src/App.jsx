import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageCatUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat Random Facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section className='content'>
        {fact && <aside><strong>{fact}</strong></aside>}
        {imageCatUrl && <img src={imageCatUrl} alt={`Image extracted using the first three word for ${fact}`} />}
      </section>
    </main>
  )
}
