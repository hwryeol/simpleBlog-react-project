import styles from '../css/Header.module.css'
import { AiOutlineMenu } from "react-icons/ai";

function Header({className,postData}) {
    return (
      <div className={[className,styles.header].join(" ")}>
        <div>
          <div className={styles.header_title}>{postData.title}</div>
          <div className={styles.header_createAt}>{postData.createAt}</div>
        </div>
        <div className={styles.header_menu}><AiOutlineMenu/></div>
      </div>
    );
  }
  
  export default Header;