import styles from './index.less';
// import { useState } from 'react';
import IndexPage from '@/components/index';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <IndexPage />
    </div>
  );
}
export default HomePage
