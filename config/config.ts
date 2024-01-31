import MonacoEditorPlugin from 'monaco-editor-webpack-plugin';
import ConfigGeneratePlugin from './ConfigGeneratePlugin.js';
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';



export default defineConfig({
  base: '/',
  publicPath: '/',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  routes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy['dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  define: {
    LOGO_PATH: process.env.LOGO_PATH,
    WITHOUT_LOGIN: process.env.WITHOUT_LOGIN === 'true',
    SCENE: process.env.SCENE,
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.plugin('config-generate').use(ConfigGeneratePlugin, [
      {
        templatePath: './config/businessConfigTemplate.json',
        filename: '_business.config.js',
        path: 'public',
        name: '__OMP__BUSINESS__CONF__',
      },
    ]);
    if (!process.env.SCENE || process.env.SCENE === 'undefined') {
      memo.plugin('monaco-editor').use(MonacoEditorPlugin, [
        {
          languages: ['json', 'yaml', 'markdown'],
          features: ['find'],
        },
      ]);
      memo.entry('editor.worker').add('monaco-editor/esm/vs/editor/editor.worker.js').end();
      memo.entry('json.worker').add('monaco-editor/esm/vs/language/json/json.worker').end();
      memo.entry('css.worker').add('monaco-editor/esm/vs/language/css/css.worker').end();
      memo.entry('html.worker').add('monaco-editor/esm/vs/language/html/html.worker').end();
      memo.output
        .path(require('path').resolve(__dirname, '../dist'))
        .filename('[name].bundle.js')
        .end();
      memo.output.globalObject('self').end();
    }
  },
});
