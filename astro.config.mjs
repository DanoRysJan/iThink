import { defineConfig } from 'astro/config';

const repoName = 'iThink';
const isProductionBuild =
  process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://danorysjan.github.io',
  base: isProductionBuild ? `/${repoName}` : '/',
});
