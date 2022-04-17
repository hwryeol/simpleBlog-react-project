import styles from "./Main.module.css"
import Contents from "./tsx/Contents.tsx"
import Index from "./tsx/Index.tsx"

function Main() {
  return (
    <div id="main" className={styles.main}>
    <h2 className={styles.main_header}>왜 한국은 저출산이 심각할까?</h2>
      <div className={styles.main_body}>
            <div className={styles.main_contents}>
              <Contents />
            </div>
            <div className={styles.main_index}>
              <Index />
            </div>
        </div>
      </div>
  );
}

export default Main;