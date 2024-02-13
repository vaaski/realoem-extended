import { $ } from "./util"

export const editBar = () => {
  const selectAnotherCar = $("a[href='/bmw/enUS/select']") as HTMLAnchorElement
  selectAnotherCar.innerHTML = "Back to Overview"
  selectAnotherCar.href = window.location.href.split("&")[0]
  selectAnotherCar.className = "back-to-overview"
}
