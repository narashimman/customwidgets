(function() {
    let template = document.createElement("template");
    template.innerHTML = `
    <H1>HELLO WORLD 2</H1>
    <style>
    :host {
    border-radius: 25px;
    border-width: 4px;
    border-color: black;
    border-style: solid;
    display: block;
    }</style>
   `;
    
    class chatbot extends HTMLElement {
    constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(template.content.cloneNode(true));
    console.log("instantiated");
    this.addEventListener("click", event => {
    var event = new Event("onClick");
    this.dispatchEvent(event);
    });
    this._props = {};
    }
    onCustomWidgetBeforeUpdate() {}
    onCustomWidgetAfterUpdate() {}
    }
    customElements.define("com-github-narashimman-customwidgets-chatbot", chatbot);
    })();
