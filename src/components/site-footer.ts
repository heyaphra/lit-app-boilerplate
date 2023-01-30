import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-footer")
export class SiteFooter extends LitElement {
  render() {
    return html`<slot></slot> `;
  }

  static styles = css`
    .read-the-docs {
      color: #888;
    }
  `;
}
