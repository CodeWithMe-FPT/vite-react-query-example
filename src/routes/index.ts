import LoginForm from '@/components/LoginForm';
import config from '@/config';

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: LoginForm },
  { path: config.routes.search, component: LoginForm }
];

export { publicRoutes };
