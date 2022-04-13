import styles from "./App.module.css"
import Nav from "./nav/Nav.tsx"
import Main from "./main/Main.tsx"

function App() {
  return (
    <div className="App">
    <div id="container" className={styles.container}>
      <Nav />
      <Main />
    </div>  
    </div>
  );
}

export default App;
