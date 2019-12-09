(function () {
    let template = document.createElement("template");
    template.innerHTML = `<H1> Hello World 4 with methods</H1>`;

    class helloworld extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
            console.log("Hello world, this time with a method!");
            this._props = {};
        }
        onCustomWidgetBeforeUpdate(changedProperties) { }
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