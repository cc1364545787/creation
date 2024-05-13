import styles from './index.less';
import sss from '../../../assets/create_center/video_image.jpeg'

const CreationVideoPage = () => {
    const config = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
      <div className={styles.main}>
        {Array.isArray(config) ? (
          config.map((_) => (
            <div className={styles.videoBox}>
                <div className={styles.videoContent}>
                  <img className={styles.videoContentImg} src={sss} />
                </div>
                <div className={styles.videoMsg}>
                  <div className={styles.videoMsgTitle}>
                    视频名称
                  </div>
                  <div className={styles.videoMsgTime}>
                    2024/12/2 12:11:23
                  </div>
                </div>
            </div>
              ))
            ) : (
              <></>
        )}
      </div>
  );
}
export default CreationVideoPage
