import styles from './index.less';
import { Button } from 'antd';

const HomePage = () => {
  return (
    <div className={styles.main}>
      {/* <h1 className={styles.title}>create index</h1> */}
    <div className={styles.title}>
    <Button type="primary">进入创作平台</Button>
    </div>
    </div>
  );
}
export default HomePage
