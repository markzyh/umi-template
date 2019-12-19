import React, { useState, useEffect } from 'react';
import Swiper from '../../components/swiper';
import style from './style/indexPage.less';
import { useDispatch, useSelector } from 'dva';
function IndexPage() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const indexPage = useSelector(state => state.indexPage);

  const navigatorList = [
    {
      img: require('../../assets/images/new-build.png'),
      text: '新盘推荐',
      url: '../buildList/buildList?type=1',
    },
    {
      img: require('../../assets/images/bussiness-build.png'),
      text: '商业地产',
      url: '../buildList/buildList?type=2',
    },
    {
      img: require('../../assets/images/old-build.png'),
      text: '精选二手',
      url: '../buildList/buildList?type=3',
    },
    {
      img: require('../../assets/images/school-build.png'),
      text: '学校信息',
      url: '../schoolList/schoolList',
    },
  ];

  useEffect(() => {
    dispatch({
      type: 'indexPage/getBanner',
    });
  }, [dispatch]);

  const { bannerList } = indexPage;
  return (
    <div className={style.indexPage}>
      <Swiper bannerList={bannerList} />
      <ul className={style.navigators}>
        {navigatorList.map((item, index) => (
          <li key={index}>
            <img src={item.img} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <div className={style.notifaction}>
        这里是一段文字这里是一段文字这里是一段文字这里是一段文字 这里是一段文字这里是一段文字
      </div>
    </div>
  );
}

export default IndexPage;
