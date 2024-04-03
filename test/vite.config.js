import { defineConfig } from "vite";

export default defineConfig({
    root: './',
    base: '/tailwindcss-material-tokens',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
        minify: true,
    }
})