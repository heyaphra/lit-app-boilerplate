import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-page")
class About extends LitElement {
  render() {
    return html`
      <site-hero></site-hero>

      <card-container>The router is working!</card-container>

      <site-footer>
        <p class="read-the-docs">
          Click on the Vite and Lit logos to learn more
        </p>
      </site-footer>
    `;
  }
  
  static styles = css`
    :host {
      max-width: 1280px;
      padding: 2rem;
      text-align: center;
    }
  `;
}

export { About };
