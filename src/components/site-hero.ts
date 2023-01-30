import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import litLogo from "../assets/lit.svg";

@customElement("site-hero")
export class SiteHero extends LitElement {
  render() {
    return html`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
    `;
  }

  static styles = css`
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }
  `;
}
