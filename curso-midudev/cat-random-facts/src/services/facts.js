const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const BASE_CAT_ENDPOINT_IMAGE_ID = 'https://cataas.com/cat/says/'
const OPTIONS_CAT_ENDPOINT_IMAGE_ID = '?fontSize=50&fontColor=red&json=true'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getImageCatId = async (threeFirstWords) => {
  const res = await fetch(`${BASE_CAT_ENDPOINT_IMAGE_ID}${threeFirstWords}${OPTIONS_CAT_ENDPOINT_IMAGE_ID}`)
  const response = await res.json()
  const { _id } = response
  return _id
}
