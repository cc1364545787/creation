
// 初始路由，路由的存在会直接影响构建时的模块
const defaultRoutes = [
  // { path: '/userinfo', name: '个人信息', component: './User/Info', hideInMenu: true },
  // { path: '/login', layout: false, component: './User/Login' },
  // {
  //   path: '/data-statistics',
  //   name: '数据统计',
  //   icon: 'schedule',
  //   access: 'business',
  //   routes: [
  //     {
  //       path: 'operational-statistics',
  //       name: '运营统计',
  //       component: './BusinessOperation/OperationalStatistics',
  //       access: 'business.operate',
  //     },
  //     { path: '/data-statistics', redirect: '/data-statistics/operational-statistics' },
  //     { component: './404' },
  //   ],
  // },
  { path: '/', redirect: '@/pages/index' },
  // { component: './404' },
];

export default defaultRoutes;
