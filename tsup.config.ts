import { hostname } from "node:os"
import { defineConfig } from "tsup"

const buildDate = new Date()
const HOSTNAME = hostname()

export default defineConfig({
  entry: ["src/index.user.ts"],
  splitting: false,
  clean: true,
  format: ["iife"],
  outExtension: () => ({ js: ".js" }),
  injectStyle: true,
  platform: "browser",
  env: {
    BUILT_UNIX: buildDate.getTime().toString(),
    HOSTNAME,
  },
  banner: () => ({
    js: [
      "// ==UserScript==",
      "// @name         realoem-extended",
      `// @description  RealOEM Extended, built on ${HOSTNAME} at ${buildDate}`,
      "// @version      1",
      "// @author       vaaski <admin@vaa.ski>",
      "// @match        https://www.realoem.com/*",
      "// @icon         https://www.google.com/s2/favicons?sz=64&domain=realoem.com",
      "// ==/UserScript==",
    ].join("\n"),
  }),
})
