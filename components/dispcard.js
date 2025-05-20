const template = document.createElement('template');
template.innerHTML = `
  <style>
  .card {
    font-family: "Gill Sans", sans-serif;
    display: flex;
    align-items: flex-start;
    // border: 1px solid #ccc;
    // padding: 16px;
    margin: 10px 0;
    gap: 16px;
  }

  ::slotted(img[slot="image"]) {
    width: 250px;
    height: auto;
    object-fit: cover;
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

  .info {
    font-size: 1em;
  }
</style>

  <div class="card">
    <slot name="image"></slot>
    <div>
      <h3 id="title"></h3>
      <time id="date"></time>
      <div class="info"><slot></slot></div>
      <div class="link"><slot></slot></div>
    </div>
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
