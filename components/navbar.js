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
          border-bottom: solid 1px rgb(227, 227, 227);;
        }
        a {
          color: black;
          text-decoration: none;
          font-size: 1.5em;
          font-weight: 100;
        }
        a:hover {
          transition: 1s;
          font-weight: 200;
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
