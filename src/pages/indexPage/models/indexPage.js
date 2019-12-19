import * as indexService from '../services/indexPage';

export default {
  namespace: 'indexPage',
  state: {
    bannerList: [],
    dd: 'xixix',
  },
  effects: {
    *getBanner({}, { call, put }) {
      const { data } = yield call(indexService.getBanner);
      yield put({
        type: 'setBanner',
        payload: {
          data,
        },
      });
    },
  },
  reducers: {
    setBanner(state, { payload: { data } }) {
      return { ...state, bannerList: data, dd: '变了' };
    },
  },
};
