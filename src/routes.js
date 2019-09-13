import AppHome from '@/components/AppHome';

const loadComponent = () => {
  return import(`@/banners/${document.location.pathname.split('/').pop()}`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/banner/:banner',
    component: loadComponent
  }
];

export default routes;