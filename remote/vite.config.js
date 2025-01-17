import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntryApplication.js",
      remotes: {
        hostApp: "http://localhost:5005/assets/remoteEntryHost.js",
        cartRemoteApp: "http://localhost:5002/assets/remoteEntryCart.js",
      },
      exposes: {
        "./Tile": "./src/components/Tile/Tile",
        "./store": "./src/store",
        "./AddToCart": "./src/components/AddToCart",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
