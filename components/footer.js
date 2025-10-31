class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="top">
          <img src="./images/white-logo.svg">
        </div>
        <div class="bottom">
          <a href="https://github.com/emilyzugel/">&copy; BitBlog. Built by Zg.<a/>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-c', Footer);
