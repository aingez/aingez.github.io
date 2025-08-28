class MyNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="my-nav">
        <a href="index.html">Home</a>
        <a href="project.html">Project</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
    `;
  }
}

customElements.define('my-nav', MyNav);
