class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="about">
        <div class="container">
          <div class="about-header">
            <img src="./images/orange-logo.svg">
            <p>This blog is a digital homestead in the Bitcoin ecosystem. 
              A place where curiosity meets code, and ideas about sound money 
              find their voice.
            </p>
          </div>
          <div class="why">
             <h2>Why This Blog Exists</h2>
             <p>I built this space for two fundamental reasons:</p>
            <div class="card-wrapper">
              <div class="card-circle">
                <h3>To Learn 🧠</h3>
                <p>I'm documenting my learning process. From the technical foundations of cryptography 
                    and distributed systems to the economic implications of hard money.
                 </p>
              </div>
              <div class="card-circle">
                <h3>⚡ To Share</h3>
                <p>Bitcoin isn't just a technology; it's a paradigm shift. Here, we explore: 
                    the intersection of cryptography, economics, and freedom and the philosophical implications.
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-c', About);
