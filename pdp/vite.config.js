import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const deps = require("./package.json").dependencies;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pdp",
      filename: "remoteEntryPdp.js",
      remotes: {
        pdp: "http://localhost:9001/assets/remoteEntryPdp.js",
        cart: "http://localhost:9002/assets/remoteEntryCart.js",
      },
      exposes: {
        "./PDPContent": "./src/PDPContent.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom", "tailwindcss"],
    }),
  ],
  server: {
    port: 9001,
    cors: true,
    historyApiFallback: true,
    open: false,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
});
