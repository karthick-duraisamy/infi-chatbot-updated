import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/Exported.tsx",
      name: "mailerEngine",
      fileName: "infi-chatbot",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
});
