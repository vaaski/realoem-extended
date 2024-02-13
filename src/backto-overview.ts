import { $ } from "./util"

const createBackButton = () => {
  const button = document.createElement("button")
  button.textContent = "Back to Overview"
  button.classList.add("back-to-overview")
  button.addEventListener("click", () => {
    window.location.href = window.location.href.split("&")[0]
  })
  return button
}

export const appendBackButton = () => {
  $(".toplinks")?.append(createBackButton())
}
