import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { routes } from "./routes";

// If needed, dynamic imports can be used instead to optimize client download size.
import "../views";
import "../components";

@customElement("web-app")
class App extends LitElement {
  private router = new Router(this, routes);

  render() {
    return html` <main>${this.router.outlet()}</main>`;
  }
}

export { App };
