(function () {
    let template = document.createElement("template");
    template.innerHTML = `<H1> Hello World 3</H1>`;

    class helloworld extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
            console.log("Hello world!");
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
            this._props = {};
        }
        onCustomWidgetBeforeUpdate(changedProperties) { }
        onCustomWidgetAfterUpdate(changedProperties) { }
    }
    customElements.define("com-narasgithub-customwidgets-helloworld", helloworld);
})();