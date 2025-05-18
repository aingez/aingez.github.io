class MyNav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('nav');
    wrapper.innerHTML = `
      <style>
        nav {
          background: whitexs;
          padding: 0.5rem;
          display: flex;
          gap: 1rem;
          border-bottom: solid 1px;
          font-weight: 100;
        }
        a {
          color: black;
          text-decoration: none;
          font-size: 1.5em;
          opacity: 50%;
        }
        a:hover {
          transition: 1s;
          opacity: 100%;
        }
      </style>
      <a href="index.html">Home</a>
      <a href="project.html">Project</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    `;
    shadow.appendChild(wrapper);
  }
}

customElements.define('my-nav', MyNav);
