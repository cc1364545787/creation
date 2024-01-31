import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  // routes: [
  //   { path: '/', component: '@/pages/home/index' },
  // ], // 配置写在config.ts
  fastRefresh: {},
});
