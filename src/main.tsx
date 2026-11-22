import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Public pages arrive pre-rendered (scripts/prerender.mjs): hydrate that HTML so it stays on screen
// and simply becomes interactive. The admin shell (app.html) is empty and renders from scratch.
if (root.firstElementChild) {
  hydrateRoot(root, <App />, {
    onRecoverableError: (error) => {
      // A mismatch makes React re-render on the client: harmless for visitors, worth fixing for speed
      console.warn("Hydration mismatch:", error instanceof Error ? error.message : error);
    },
  });
} else {
  createRoot(root).render(<App />);
}
