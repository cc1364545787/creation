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
    BASE_API_URL: 'http://36.155.98.104:19090/api/v1',
    APP_API_URL: 'http://36.155.98.104:19091/api/v1',
    THIRD_LOGIN_URL: 'http://120.204.115.144:23200/cas/login?service=',
    THIRD_LOGIN_CALLBACK: '',
    THIRD_LOGOUT_URL: 'http://120.204.115.144:23200/cas/logout?service=',
    THIRD_LOGOUT_CALLBACK: '',
  },
});
