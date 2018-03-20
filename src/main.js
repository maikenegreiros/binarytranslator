import $ from "./Helpers/selectorElementDom.js"
import { formManager } from "./Controllers/formManager.js"
import { textArea } from "./Views/textArea.js"

let main = () => {
    let form = $(".form");
    formManager(form, textArea);
}

window.addEventListener("DOMContentLoaded", main)
