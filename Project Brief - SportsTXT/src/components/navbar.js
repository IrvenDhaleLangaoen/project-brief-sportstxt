class NavBar extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });

      const template = document.createElement('template');
      template.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="../../src/styles/styles.css">
        <style>
          .navbar {
            background-color: transparent !important;
          }
          .navbar-brand img {
            height: 40px;
          }
          .nav-link {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-family: 'PSBold';
            color: #472836 !important;
          }
          .nav-link img {
            margin-right: 5px;
            height: 20px;
          }
        </style>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="../../src/screens/home.html">
                    <img src="../../src/assets/images/sports-txt-logo.png" alt="SportsTXT Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../../src/screens/home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../../src/screens/features.html">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../../src/screens/about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../../src/screens/contact-us.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
      `;
  
      shadow.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('nav-bar', NavBar);
  