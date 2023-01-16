import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const AUTH_LOCATION = "/";

const rt = ((path, name, cmp, children) => {
  return {
    path,
    name, 
    component(){ return import('@/pages/'+cmp) },
    children: children?.map(ch => ch)
  };
});

const routes = [
  rt(AUTH_LOCATION, 'Login', 'login_form'),
  rt('/campaign', 'campaigns', 'campaigns/campaigns'),
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
