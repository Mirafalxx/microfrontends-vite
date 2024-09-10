import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "host_app",
//       filename: "remoteEntryHost.js",
//       exposes: {
//         "./DummyPage": "./src/DummyPage.jsx",
//         "./DummyPage2": "./src/DummyPage2.jsx",
//         "./products": "./src/products.js",
//       },
//       remotes: {
//         remoteApp: "http://localhost:5001/assets/remoteEntryApplication.js",
//         cartRemoteApp: "http://localhost:5002/assets/remoteEntryCart.js",
//         pdpRemoteApp: "http://localhost:9001/assets/remoteEntryPdp.js",
//       },
//       shared: ["react", "react-dom", "react-router-dom"],
//     }),
//   ],
//   build: {
//     modulePreload: false,
//     target: "esnext",
//     minify: false,
//     cssCodeSplit: false,
//   },
// });

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "host_app",
//       filename: "remoteEntryHost.js",
//       exposes: то какие файлы мы хотим разшарить в наш 'host'
//       remotes: - какие
//       shared: библиотеки необходимые для работы микросервиса
//     }),
//   ],
//   build: {
//     modulePreload: "",
//     target: "esnext",
//     minify: "",
//     cssCodeSplit: "",
//   },
// });
