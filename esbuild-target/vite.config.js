import { defineConfig } from "vite";

export default defineConfig({
  // esbuild: {
  //   target: "ES2022",
  //   tsconfigRaw: {
  //     compilerOptions: {
  //       target: "ES2022",
  //     },
  //   },
  // },
  optimizeDeps: {
    esbuildOptions: {
      target: "ES2022",
    },
  },
});
