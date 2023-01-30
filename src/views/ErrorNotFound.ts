import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("error-not-found")
class ErrorNotFound extends LitElement {
  render() {
    return html`<h1>404 Not Found</h1>`;
  }
}

export { ErrorNotFound };
