/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/system/': {
      target: 'http://rap2api.taobao.org/',
      changeOrigin: true,
      pathRewrite: { '^': 'app/mock/291595' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  uat: {
    '/api/': {
      target: 'your uat url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  prod: {
    '/api/': {
      target: 'your prod url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
