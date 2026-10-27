import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    pool: "vmThreads",
    maxWorkers: 1,
    fileParallelism: false,
    restoreMocks: true,
  },
});
