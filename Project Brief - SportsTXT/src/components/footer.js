class CustomFooter extends HTMLElement {
    constructor() {
      super();
      
      const shadow = this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="../../src/styles/styles.css">
        <style>
            .cta-button {
                margin-right: 50px; 
                background-color: #9AD2CB;
                border: none;
                color: #472836;
                font-family: 'PSReg';
            }
        </style>
        <div class="d-flex justify-content-center align-items-center mt-5" style="background-color: #FAC8D1; padding: 10px;">
            <a href="../../src/screens/home.html" style="margin-right: 50px;">
                <img src="../../src/assets/images/sports-txt-logo.png" alt="figure-6" style="height: 60px;">
            </a>
            <button type="button" class="btn btn-primary btn-lg cta-button">Privacy and Terms</button>
            <button type="button" class="btn btn-primary btn-lg cta-button">Contact Us</button>
        </div>
      `;
      
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
  