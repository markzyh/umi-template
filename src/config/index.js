import development from './dev';
import production from './pro';

const env = process.env.NODE_ENV || 'development';
const config = {
  development,
  production,
};
export default config[env];
