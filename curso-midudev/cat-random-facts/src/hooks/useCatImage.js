import { useEffect, useState } from 'react'
import { getImageCatId } from '../services/facts'
const BASE_CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/'
const OPTIONS_CAT_ENDPOINT_IMAGE_URL = '?position=top'

export function useCatImage ({ fact }) {
  const [imageCatId, setImageCatId] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    getImageCatId(threeFirstWords).then(newImageCatId => setImageCatId(newImageCatId))
  }, [fact])

  return { imageCatUrl: `${BASE_CAT_ENDPOINT_IMAGE_URL}${imageCatId}${OPTIONS_CAT_ENDPOINT_IMAGE_URL}` }
}
