/** query selector shorthand */
export const $ = <T extends Element>(
  selector: Parameters<ParentNode["querySelector"]>[0],
  node: ParentNode = document
): T | null => node.querySelector(selector)

/** query selector all shorthand */
export const $$ = <T extends Element>(
  selector: Parameters<ParentNode["querySelector"]>[0],
  node: ParentNode = document
): Array<T> => {
  const result: NodeListOf<T> = node.querySelectorAll(selector)
  return [...result]
}

/** safe query selector shorthand, throws if element not found */
export const $t = <T extends Element>(
  selector: Parameters<ParentNode["querySelector"]>[0],
  node: ParentNode = document
) => {
  const result = $<T>(selector, node)
  if (!result) throw new Error(`Element not found: ${selector}`)

  return result
}

/** safe query selector all shorthand, throws if element not found */
export const $$t = <T extends Element>(
  selector: Parameters<ParentNode["querySelector"]>[0],
  node: ParentNode = document
) => {
  const result = $$<T>(selector, node)
  if (result.length === 0) throw new Error(`No elements found: ${selector}`)

  return result
}
