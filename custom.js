// custom.js

// 1. Creating a class extending HTMLElement
class MyWebComponent extends HTMLElement {
    constructor() {
        super(); // Must call super() first in the constructor

        // 2. Attaching a Shadow DOM
        // 'open' mode allows us to access the shadow root via .shadowRoot property
        const shadowRoot = this.attachShadow({ mode: 'open' }); 

        // Define the content and styles for the Shadow DOM
        shadowRoot.innerHTML = `
            <style>
                /* Styles here are scoped only to this component */
                #container {
                    padding: 10px;
                    border: 1px solid #ffaa00;
                    background-color: #fff8e1;
                    font-family: Arial, sans-serif;
                }
                .status-message {
                    color: #d84315; 
                    font-weight: bold;
                }
            </style>
            <div id="container">
                <p class="status-message" id="component-status">Initializing Web Component...</p>
                <button>Check Status</button>
            </div>
        `;

        // 3. Selecting elements inside the shadow root using shadowRoot.querySelector
        const statusElement = shadowRoot.querySelector('#component-status');
        const checkButton = shadowRoot.querySelector('button');

        // Example: Update the selected element's content
        if (statusElement) {
            statusElement.textContent = '✅ Web Component is Ready and Rendered!';
            console.log("Found element inside Shadow DOM:", statusElement.textContent);
        }

        // Example: Add interaction to the selected button
        if (checkButton) {
            checkButton.addEventListener('click', () => {
                alert('Interaction successful inside the encapsulated component!');
            });
        }
    }
}

// Register the custom element with the DOM
// The tag name must contain a hyphen (-)
customElements.define('my-web-component', MyWebComponent);
