(function () {
    let template = document.createElement("template");
    template.innerHTML = `<H1> Hello World 4 with methods</H1>
    < form id = "form" >
            <fieldset>
                <legend>Colored Box Properties</legend>
                <table>
                    <tr>
                        <td>Color</td>
                        <td><input id="styling_color" type="text" size="40" maxlength="40"></td>
                    </tr>
                </table>
                <input type="submit" style="display:none;">
            </fieldset>
        </form>`;

    class helloworld extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.dispatchEvent(event);
        });
        this._props = {};
        }
        onCustomWidgetBeforeUpdate(changedProperties) {this._props = { ...this._props, ...changedProperties }; }
        onCustomWidgetAfterUpdate(changedProperties) {
            if ("color" in changedProperties) {
                this.style["background-color"] = changedProperties["color"];
            }
            if ("opacity" in changedProperties) {
                this.style["opacity"] = changedProperties["opacity"];
            }
        }
    }
    customElements.define("com-narasgithub-customwidgets-helloworldwm", helloworldwm);
})();