import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("card-container")
export class CardContainer extends LitElement {
  render() {
    return html`
      <div class="card-container">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    .card-container {
      padding: 2em;
    }
  `;
}
