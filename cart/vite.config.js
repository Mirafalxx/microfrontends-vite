import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_cart",
      filename: "remoteEntryCart.js",
      exposes: {
        "./cart": "./src/cart.js",
        "./Login": "./src/Login.jsx",
        "./CartContent": "./src/CartContent.jsx",
      },
      remotes: {
        hostApp: "http://localhost:5005/assets/remoteEntryHost.js",
        remoteApp: "http://localhost:5001/assets/remoteEntryApplication.js",
      },
      shared: ["react", "react-dom", "rxjs"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
