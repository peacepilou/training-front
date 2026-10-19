import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // l'app lancée par ng serve
    supportFile: false,
  },
});
