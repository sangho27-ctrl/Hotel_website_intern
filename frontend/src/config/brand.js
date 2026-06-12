
import brightonInn from './brands/brighton-inn.js'

const brandMap = {
  'brighton-inn': brightonInn,
}

export const brand = brandMap[import.meta.env.VITE_BRAND] ||brightonInn
