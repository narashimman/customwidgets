(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <H1> Hello World 3</H1>
    HELLO WITH A CHAT BOT
    <div class="container">
    <h1 class="loader__title">0</h1>
    <div class="loader"></div>   
    </div>`;

    class helloworld extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
            console.log("Hello world!");
        
                const changeNum = () => {
                const randomNum = Math.round(Math.random() * 100);
                const degrees = Math.round((randomNum / 100) * 180);
                const root = document.querySelector(":root");
                let title = document.querySelector(".loader__title");

                let currentNumber = title.innerText;

                setInterval(() => {
                    if (currentNumber < randomNum) {
                        currentNumber++;
                        title.innerText = currentNumber;
                    } else if (currentNumber > randomNum) {
                        currentNumber--;
                        title.innerText = currentNumber;
                    }
                }, 3);

                root.style.setProperty("--rotation", `${degrees}deg`);
            };


            setInterval(() => {
                changeNum();
            }, 2000);

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