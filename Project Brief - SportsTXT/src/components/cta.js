class CustomImageContainer extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5rem;
        }
        .container img {
          width: 100%;
          margin-top: 3rem;
        }
      </style>
      <div class="container">
        <img src="../../src/assets/images/figure-6.png" alt="figure-6" class="img-fluid">
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-image-container', CustomImageContainer);

{/* <div class="d-flex flex-column justify-content-center align-items-center mt-5">
  <img src="../../src/assets/images/figure-6.png" alt="figure-6" class="img-fluid w-100 mt-3">
</div> */}
