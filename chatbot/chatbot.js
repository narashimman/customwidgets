(function() {
    let template = document.createElement("template");
    template.innerHTML = `
    <script src="https://cdn.cai.tools.sap/webchat/webchat.js"
    channelId="f84fc5a3-1edf-4886-86dc-243d43fc1991"
    token="9351f7b04aab9b044f3960827697cabc"
    id="cai-webchat"
    ></script>
    <H1>HELLO WORLD </H1>
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