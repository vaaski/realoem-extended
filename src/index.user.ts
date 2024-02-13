import "../styles/dark.css"
import "../styles/index.css"

import { appendBackButton } from "./backto-overview"
import { appendExternalLinks } from "./external-links"
import { $ } from "./util"

//append external links to parts list
const partsList = $<HTMLTableElement>("table#partsList")
if (partsList) appendExternalLinks(partsList)

//append navigation button to go back to overview
const toplinks = $<HTMLDivElement> (".toplinks")
const url = window.location.href
if (toplinks && url.includes("&")) appendBackButton() 