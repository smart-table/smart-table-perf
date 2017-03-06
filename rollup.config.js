import node from 'rollup-plugin-node-resolve';

export default {
  entry: "./index.js",
  plugins: [
    node({jsnext: true}),
  ],
  dest: "./dist/smart-table-perf.js",
  moduleName: "smart-table-perf",
  format: "umd"
};