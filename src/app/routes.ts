import { html } from "lit";
import { RouteConfig } from "@lit-labs/router";

const routes: RouteConfig[] = [
  {
    name: "home",
    path: "/",
    render: () => html`<home-page></home-page>`,
  },
  {
    name: "about",
    path: "/about",
    render: () => html`<about-page></about-page>`,
  },
  {
    name: "404",
    path: "/*",
    render: () => html`<error-not-found></error-not-found>`,
  },
];

export { routes };
