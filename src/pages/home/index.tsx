import styles from './index.less';
// import { useState } from 'react';
import IndexPage from '@/components/index';
import bannerFigure from '@/assets/home/img_white_collar.png';
import imgLogo from '@/assets/home/img_logo.png';
import startCreate from '@/assets/home/font_start_creating_sel.png';
import startCreateIcon from '@/assets/home/icon_start_creating.png';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <img className={styles.logoImg} src={imgLogo} />
          <img className={styles.personImg} src={bannerFigure} />
        </div>
        <div>
          <div className={styles.nav}>
            <div className={styles.classBtn}>热门分类</div>

            <div className={styles.startCreate}>
              <div className={styles.startCreateLeft}>
                <img className={styles.leftText1} src={startCreate} />
                <span className={styles.leftText2}>高效短视频创作</span>
              </div>
              <div className={styles.startCreateRight}>
                <img className={styles.rightIcon} src={startCreateIcon} />
              </div>
            </div>

          </div>
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
