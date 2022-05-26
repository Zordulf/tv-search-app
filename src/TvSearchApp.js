// Created by: Zorell D. Gerente
// Email: zdgerente@outlook.com

import { LitElement, html } from 'lit';
import { styles } from './styles';

export class TvSearchApp extends LitElement {
  static get properties() {
    return {
      response: { type: Array },
    };
  }

  static styles = styles;

  constructor() {
    super();
    this.response = [];
    this.result = false;
  }

  get searchInput() {
    return this.renderRoot?.querySelector('#searchInput') ?? null;
  }

  firstUpdated() {
    fetch(`https://api.tvmaze.com/shows`)
      .then(r => r.json())
      .then(r => {
        this.response = r;
      });
  }

  async searchResult() {
    const input = `https://api.tvmaze.com/search/shows?q=${this.searchInput.value}`;
    console.log(!this.searchInput.value);

    if (!this.searchInput.value) {
      this.result = false;
      fetch(`https://api.tvmaze.com/shows`)
        .then(r => r.json())
        .then(r => {
          this.response = r;
        });
    } else {
      this.result = true;
      return await fetch(input)
        .then(r => r.json())
        .then(r => {
          this.response = r;
          console.log(input);
          console.log(this.response);
        });
    }
  }

  render() {
    const { response } = this;
    return html`
      <div class="container">
        <h1>TV Search App</h1>
        <input id="searchInput" name="search" />
        <button @click="${() => this.searchResult()}">Search</button><br>
        <span>Note: Press "Search" while text box<br> is empty to show all tv shows.</span><br>
        <div>
          <ul class="ul">
            ${response.map(
              item => html`
                <div class="card">
                  <div class="image-container">
                    <img
                      src=${!this.result
                        ? item.image.original
                        : item.show.image === null
                        ? 'https://via.placeholder.com/100x150'
                        : item.show.image.original}
                      alt="Avatar"
                    />
                  </div>
                  <div class="desc-container">
                    <span class="heading"
                      ><b>${!this.result ? item.name : item.show.name}</b><br
                    /></span>
                    <span
                      >Rating:
                      ${!this.result
                        ? item.rating.average === null
                          ? 'No rating yet'
                          : item.rating.average
                        : item.show.rating.average === null
                        ? 'No rating yet'
                        : item.show.rating.average}</span
                    >
                    <p>
                      ${!this.result
                        ? item.summary.replace(/<\/?[^>]+(>|$)/g, '')
                        : item.show.summary === null
                        ? 'No summary yet'
                        : item.show.summary.replace(/<\/?[^>]+(>|$)/g, '')}
                    </p>
                  </div>
                </div>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }
}
