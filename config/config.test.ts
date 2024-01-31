// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  define: {
    BASE_API_URL: 'http://mg-bj.zegonetwork.com:8002/api/v1',
    APP_API_URL: 'http://mg-bj.zegonetwork.com:8002/api/v1',
  },
});
