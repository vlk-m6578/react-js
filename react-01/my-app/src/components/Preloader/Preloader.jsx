import styles from './Preloader.module.css';
import preloader from '../../static/img/preloader.svg';


export const Preloader = () => {
  return (
    <div className={styles.preloader}><img src={preloader}></img></div>
  )
}