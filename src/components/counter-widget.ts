import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("counter-widget")
export class CounterWidget extends LitElement {
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <button @click=${this._onClick}>count is ${this.count}</button>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: border-color 0.25s;
      background-color: #f9f9f9;
    }

    button:hover {
      border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;
}
