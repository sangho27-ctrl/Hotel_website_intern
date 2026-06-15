import colsonHouse from './brands/colson-house.js'
import brightonInn from './brands/brighton-inn.js'

const brandMap = {
  'colson-house': colsonHouse,
  'brighton-inn': brightonInn,
}

export const brand = brandMap[import.meta.env.VITE_BRAND] || brightonInn
