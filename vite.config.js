import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                privacy: resolve(process.cwd(), 'politica-privacidade.html'),
                terms: resolve(process.cwd(), 'termos-uso.html'),
            },
        },
    },
});
