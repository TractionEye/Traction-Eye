import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import path from "path";

export default defineConfig({
	base: '',
	plugins: [
		// Allows using React dev server along with building a React application with Vite.
		// https://npmjs.com/package/@vitejs/plugin-react-swc
		react(),
		// Allows using the compilerOptions.paths property in tsconfig.json.
		// https://www.npmjs.com/package/vite-tsconfig-paths
		tsconfigPaths(),
		// Allows using self-signed certificates to run the dev server using HTTPS.
		// https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
		// basicSsl()
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		// Uncomment this line if you want to expose your dev server and access it from the devices
		// in the same network.
		host: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			define: {
				global: "globalThis",
			},
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
				}),
			],
		},
	},
  build: {
		outDir: "dist",
		rollupOptions: {
			input: path.resolve(__dirname, "index.html"),
		},
	},
});
