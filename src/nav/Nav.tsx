import nav_bgImage from "./img/nav_bgImage.jpg"
import styles from "./Nav.module.css"

function Nav() {
  return (
      <div id="nav" className={styles.nav}>
        <img className={styles.nav_bgImage} src={nav_bgImage}/>
        <div className={styles.nav_profile}>
          <div className={styles.nav_profile_aboutMe}></div>
        </div>
        <div className={styles.nav_index}>
            <div>목록1</div>
            <div>목록2</div>
            <div>목록3</div>
            <div>목록4</div>
            <div>목록5</div>
            <div>목록6</div>
        </div>
        <div className={styles.nav_footer}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        
      </div>
  );
}

export default Nav;
