import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    assetsInclude: ['**/*.png', '**/*.jpg'],
    server: {
        open: true, // Automatically open browser
    },
});
