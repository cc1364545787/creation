import styles from './index.less';
import { useHistory } from 'react-router-dom';
import {Button} from 'antd';

const HomePage = () => {
  const history = useHistory()
const enterHome = () => {
  history.push('/home')
}
  return (
    <div className={styles.main}>
      <Button className={styles.title} onClick={enterHome}>进入创作平台</Button>
    </div>
  );
}
export default HomePage
