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
        "./MiniCart": "./src/MiniCart.jsx",
        "./CartContent": "./src/CartContent.jsx",
      },

      shared: ["react", "react-dom", "rxjs"],
    }),
  ],

  build: {
    target: "esnext",
    minify: false,
  },
});
