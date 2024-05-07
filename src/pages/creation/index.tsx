import styles from './index.less';
// import { useState } from 'react';
import IndexPage from '@/components/index';
// import bannerFigure from '@/assets/home/img_white_collar.png';

const CreationPage = () => {
  return (
    <div className={styles.main}>
      <div>
        {/* <img src={bannerFigure} /> */}
      </div>
      <IndexPage />
    </div>
  );
}
export default CreationPage
