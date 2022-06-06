import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'blog-app',
  distFolder: './dist/blog-app', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/blogapp/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blogapp"
      }
    },},
};
