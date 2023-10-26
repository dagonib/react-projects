import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageId, setImageId] = useState()

  // Recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Recuperación de la imagen al obtener cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setImageId(_id)
      })
  }, [fact])

  return (
    <main>
      <h1>App Random Cats</h1>
      <section className='content'>
        {fact && <aside><strong>{fact}</strong></aside>}
        {imageId && <img src={`${CAT_PREFIX_IMAGE_URL}${imageId}?position=top`} alt={`Image extracted using the first three words from ${fact}`} />}
      </section>
    </main>
  )
}
