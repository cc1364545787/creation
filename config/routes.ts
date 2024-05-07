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
  { path: '/', redirect: '/login'},
  { path: '/login', name: 'Login', component: '@/pages/login/index' },
  { path: '/home', name: 'Home', component: '@/pages/home/index' },
  { path: '/creation',  name: 'Creation', component: '@/pages/creation/index' },
  { path: '/digital',  name: 'Digital', component: '@/pages/digital/index' },
  { path: '/mine',  name: 'Mine', component: '@/pages/mine/index' },
];

export default routes;
