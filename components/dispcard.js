const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      margin: 10px 0;
      font-family: "Gill Sans", sans-serif;
    }

    .card {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 1rem;
    }

    ::slotted(img[slot="image"]) {
      width: 150px;
      height: auto;
      object-fit: cover;
      border-radius: 10px;
    }

    .card-content {
      flex: 1;
    }

    h3 {
      margin: 0;
      font-size: 1.2em;
      font-weight: 200;
    }

    time {
      display: block;
      color: gray;
      font-size: 0.9em;
      font-weight: 100;
      margin: 4px 0 10px;
    }

    .info,
    .link {
      font-size: 1em;
      font-weight: 100;
      margin-top: 6px;
      color: #000;
    }

    @media (min-width: 1300px) {
      ::slotted(img[slot="image"]) {
        width: 200px;
      }
    }
  </style>

  <div class="card">
    <slot name="image"></slot>
    <div class="card-content">
      <h3 id="title"></h3>
      <time id="date"></time>
      <div class="info"><slot name="info"></slot></div>
      <div class="link"><slot name="link"></slot></div>
    </div>
  </div>
`;

class MyCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'date'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.getElementById('title').textContent = this.getAttribute('title') || 'Untitled';
    this.shadowRoot.getElementById('date').textContent = this.getAttribute('date') || '';
  }
}

customElements.define('my-card', MyCard);
