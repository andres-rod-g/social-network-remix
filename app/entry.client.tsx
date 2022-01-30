import { CookiesProvider } from "react-cookie";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

hydrate(<CookiesProvider><RemixBrowser /></CookiesProvider>, document);
