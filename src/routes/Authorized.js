import { Redirect } from 'dva/router';

export default props => {
  const isLogin = true;

  return isLogin ? props.children : <Redirect to="/login" />;
};
