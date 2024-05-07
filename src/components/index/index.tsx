import styles from './index.less';
import home from '@/assets/home/icon_home_default@2x.png'
import home_blue from '@/assets/home/icon_home_selected@2x.png'
import creation from '@/assets/home/icon_creation_default@2x.png'
import creation_blue from '@/assets/home/icon_creation_selected@2x.png'
import digitalPeople from '@/assets/home/icon_digitalpeople_default@2x.png'
import digitalPeople_blue from '@/assets/home/icon_digitalpeople_selected@2x.png'
import mine from '@/assets/home/icon_mine_default@2x.png'
import mine_blue from '@/assets/home/icon_mine_selected@2x.png'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const indexPage = () => {
  const homeText = 'home'
  const creationText = 'creation'
  const digitalText = 'digital'
  const mineText = 'mine'
  const history = useHistory()
  const [activeValue, setActiveValue] = useState<string>('home');

  // 点击不同模块
  const handleActive = (value: string) => {
    setActiveValue(value)
    localStorage.setItem(activeValue, value)
    if(value === homeText) {
      history.push('/home')
    }
    if(value === creationText) {
      history.push('/creation')
    }
    if(value === digitalText) {
      history.push('/digital')
    }
    if(value === mineText) {
      history.push('/mine')
    }
  }
  const activeHomeIcon = () => {
    return localStorage.getItem(activeValue) === homeText ? home_blue : home
  }
  const activeCreationIcon = () => {
    return localStorage.getItem(activeValue) === creationText ? creation_blue : creation
  }
  const activeDigitalPeopleIcon = () => {
    return localStorage.getItem(activeValue) === digitalText ? digitalPeople_blue : digitalPeople
  }
  const activeMineIcon = () => {
    return localStorage.getItem(activeValue) === mineText ? mine_blue : mine
  }
  return (
      <div className={styles.index}>
        <div className={styles.indexBox} onClick={() => handleActive(homeText)}>
          <img className={styles.iconBox} src={activeHomeIcon()} />
          <span className={activeHomeIcon()===home?styles.text:styles.activeText}>首页</span>
        </div>
        <div className={styles.indexBox} onClick={() => handleActive(creationText)}>
          <img className={styles.iconBox} src={activeCreationIcon()} />
          <span className={activeCreationIcon()===creation?styles.text:styles.activeText}>创作中心</span>
        </div>
        <div className={styles.indexBox} onClick={() => handleActive(digitalText)}>
        <img className={styles.iconBox} src={activeDigitalPeopleIcon()} />
          <span className={activeDigitalPeopleIcon()===digitalPeople?styles.text:styles.activeText}>数智人中心</span>
        </div>
        <div className={styles.indexBox} onClick={() => handleActive(mineText)}>
        <img className={styles.iconBox} src={activeMineIcon()} />
          <span className={activeMineIcon()===mine?styles.text:styles.activeText}>个人中心</span>
        </div>
      </div>
  );
}
export default indexPage
