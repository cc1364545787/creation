import styles from './index.less';
// import { useState } from 'react';
import IndexPage from '@/components/index';
import bannerFigure from '@/assets/home/img_white_collar.png';
import imgLogo from '@/assets/home/img_logo.png';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <img className={styles.logoImg} src={imgLogo} />
          <img className={styles.personImg} src={bannerFigure} />
        </div>
        <div>
          <div>热门分类</div>
          <div>
          <img className={styles.personImg} src={bannerFigure} />
          </div>
        </div>
      </div>
      <IndexPage />
    </div>
  );
}
export default HomePage
