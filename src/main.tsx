import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; // (Se instalou)
import { fab } from '@fortawesome/free-brands-svg-icons';  // (Se instalou)

library.add(fas, far, fab);
createRoot(document.getElementById("root")!).render(<App />);
