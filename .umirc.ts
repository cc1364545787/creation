import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  base: '/',
  publicPath: '/',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  routes,
  fastRefresh: {},
});
