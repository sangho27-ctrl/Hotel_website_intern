import { useEffect } from 'react'

export function useSEO({ title, description, ogTitle, ogDescription }) {
  useEffect(() => {
    if (title) document.title = title

    setMeta('name', 'description', description || '')
    if (ogTitle)       setMeta('property', 'og:title',       ogTitle)
    if (ogDescription) setMeta('property', 'og:description', ogDescription)
  }, [title, description, ogTitle, ogDescription])
}

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
