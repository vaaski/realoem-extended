import "../styles/dark.css"
import "../styles/index.css"

import { editBar } from "./back-to-overview"
import { appendExternalLinks } from "./external-links"
import { $ } from "./util"

//append external links to parts list
const partsList = $<HTMLTableElement>("table#partsList")
if (partsList) appendExternalLinks(partsList)

const url = window.location.href
if (url.includes("&")) editBar()
