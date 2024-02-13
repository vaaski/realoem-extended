import "../styles/dark.css"
import "../styles/index.css"

import { appendExternalLinks } from "./external-links"
import { $ } from "./util"

const partsList = $<HTMLTableElement>("table#partsList")
if (partsList) appendExternalLinks(partsList)
