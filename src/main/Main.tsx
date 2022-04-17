import styles from "./Main.module.css"
import Contents from "./tsx/Contents.tsx"
import Index from "./tsx/Index.tsx"
import Header from "./tsx/Header.tsx"

function Main() {
  return (
    <div id="main" className={styles.main}>
    <Header className={styles.main_header} />
      <div className={styles.main_body}>
            <Contents className={styles.main_body_contents} />
            <Index className={styles.main_body_index} />
        </div>
      </div>
  );
}

export default Main;