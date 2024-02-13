import { $$t, $t } from "./util"

const createExternalLink = (link: string, faviconDomain: string) => {
  const a = document.createElement("a")
  a.href = link
  a.target = "_blank"
  a.title = `search on ${faviconDomain}`
  a.classList.add("roeme-external-link")

  a.addEventListener("click", (event) => {
    event.stopPropagation()
  })

  const img = document.createElement("img")
  img.src = `https://www.google.com/s2/favicons?sz=64&domain=${faviconDomain}`

  a.append(img)

  return a
}

export const appendExternalLinks = (table: HTMLTableElement) => {
  const partNumbers = $$t<HTMLTableCellElement>("td:has(a.inline-a)", table)

  for (const partNumber of partNumbers) {
    const partNumberText = $t("a.inline-a", partNumber).textContent
    if (partNumberText === null) continue

    const googleLink = createExternalLink(
      `https://www.google.com/search?q=${partNumberText}`,
      "google.com"
    )

    const autodocLink = createExternalLink(
      `https://www.autodoc.de/search?keyword=${partNumberText}`,
      "autodoc.de"
    )

    const leebmannLink = createExternalLink(
      `https://www.leebmann24.com/de/de/collection/catalog-10000?q=${partNumberText}`,
      "leebmann24.com"
    )

    partNumber.append(googleLink, autodocLink, leebmannLink)
  }
}
