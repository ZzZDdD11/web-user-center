export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
    ],
  },
  { path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/user-manage', name:'用户管理', icon: 'smile', component: './Admin/UserManage' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' }, // 404 路由放在最后
];
