import node from 'rollup-plugin-node-resolve';

export default {
  entry: "./example/index.js",
  plugins: [
    node({jsnext: true}),
  ],
  dest: "./example/bundle.js",
  moduleName: "example",
  format: "iife"
};