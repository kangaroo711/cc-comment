import uni from "@dcloudio/vite-plugin-uni";
import { resolve } from "path";
import { defineConfig } from "vite";
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    // 这里的alias是路径别名，是运行阶段的替换路径，而tsconfig.json中的paths是编码阶段的提示，
    alias: {
      "@": pathResolve("src"), // path.resolve中，'./src' 等于 'src'
    },
  },
});
