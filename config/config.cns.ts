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
    BASE_API_URL: 'http://170.100.133.166:9090/api/v1',
    APP_API_URL: 'http://170.100.133.166:9091/api/v1',
  },
});
