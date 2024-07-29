// config vite project in this file
// in this file we can configure all kinds of things about development and building of our project

import eslint from "vite-plugin-eslint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // we need to add eslint plugin here
  plugins: [react(), eslint],
});
