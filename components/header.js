class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="header">
        <div class="container">
          <div class="left">
            <h3>The people's money.</h3>
            <p>Sovereignty and Freedom</p>
          </div>
            <img src="./images/bitcoin-binary.svg">
        </div>
      </section>
    `;
  }
}

customElements.define('header-c', Header);
