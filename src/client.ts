import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { getRouter } from "./router";
import { createElement } from "react";

const router = getRouter();

hydrateRoot(document, createElement(StartClient, { router }));
