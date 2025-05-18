const template = document.createElement('template');
template.innerHTML = `
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      font-family: Arial, sans-serif;
      max-width: 300px;
    }
    h2 {
        text-align: left;
        font-size: 1.8em;
        margin-bottom: 0.2em;
        font-weight: 200;
    }
    time {
      font-size: 0.9em;
      color: #666;
      display: block;
      margin-bottom: 1rem;
    }
    .info {
      font-size: 1em;
      color: #000;
      opacity: 0.8;
    }
  </style>
  <div class="card">
    <slot name="image"></slot>
    <h2 id="title"></h2>
    <time id="date"></time>
    <div class="info"><slot></slot></div>
  </div>
`;

class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['title', 'date'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Default Title';
    const date = this.getAttribute('date') || '';

    this.shadowRoot.getElementById('title').textContent = title;
    this.shadowRoot.getElementById('date').textContent = date;
  }
}

customElements.define('my-card', MyCard);
