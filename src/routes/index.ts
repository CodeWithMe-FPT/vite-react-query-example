import LoginForm from '@/components/LoginForm';
import Search from '@/components/Search';
import config from '@/config';

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: LoginForm },
  { path: config.routes.search, component: Search }
];

export { publicRoutes };
