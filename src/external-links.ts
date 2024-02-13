import { $$t, $t } from "./util"

const createExternalLink = (link: string, faviconDomain: string) => {
  const a = document.createElement("a")
  a.href = link
  a.target = "_blank"
  a.classList.add("roeme-external-link")

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

    partNumber.append(googleLink, autodocLink)
  }
}
