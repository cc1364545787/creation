// 初始路由，路由的存在会直接影响构建时的模块
// const routes = [
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
const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home', name: '首页', component: '@/pages/home/index' },
  { path: '/creation',  name: '创作中心', component: '@/pages/creation/index' },
];

export default routes;
