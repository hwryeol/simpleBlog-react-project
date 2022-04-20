import styles from "./App.module.css"
import Nav from "./nav/Nav.tsx"
import Main from "./main/Main.tsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div id="container" className={styles.container}>
      <BrowserRouter>
          <Nav />
          <Main />
      </BrowserRouter>

    </div>  
    </div>
  );
}

export default App;
