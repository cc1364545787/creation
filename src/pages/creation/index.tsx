import styles from './index.less';
// import { useState } from 'react';
import IndexPage from '@/components/index';
import CreationVideoPage from './videoList/index';
import CreationDraftPage from './draftList/index';

import bannerFigure from '@/assets/create_center/icon_video@2x.png';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const CreationPage = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '视频',
      children: <CreationVideoPage />,
    },
    {
      key: '2',
      label: '草稿',
      children: <CreationDraftPage />,
    },
  ];
  const onChange = (key: string) => {
    console.log('key', key);
  };

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.createBox}>
          <div className={styles.createBoxLeft}>
            <img className={styles.createBoxImg} src={bannerFigure} alt="" />
            <div>
              <div className={styles.title}>开始创作</div>
              <div className={styles.msg}>数智人短视频</div>
            </div>
          </div>
        </div>
        <div>
        <Tabs defaultActiveKey="1" className={styles.tabs} items={items} onChange={onChange} />
        </div>
      </div>
      <IndexPage />
    </div>
  );
}
export default CreationPage
