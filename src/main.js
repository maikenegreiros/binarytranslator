import $ from "./Helpers/selectorElementDom.js"
import { modeConverter } from "./Controllers/modeConverter.js"
import { textArea } from "./Views/textArea.js"
import { form } from "./Views/form.js"

let main = () => {
    let formTarget = $(".form")
    modeConverter(new form(formTarget), textArea)
}

window.addEventListener("DOMContentLoaded", main)
