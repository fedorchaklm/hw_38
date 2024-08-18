import {
  NavLink,
  NavLinkRenderProps,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import styles from "./App.module.css";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Albums from "./components/Albums";
import AlbumCard from "./components/AlbumCard";
import { Album } from "./types";
import About from "./components/About";

function App() {
  const getLinkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? styles.active : "";
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => setAlbums(albums))
      .catch(() => console.error("Something went wrong"));
  }, []);

  return (
    <Router>
      <header>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={getLinkClass}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/albums" className={getLinkClass}>
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getLinkClass}>
              About project
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/albums" element={<Albums albums={albums} />} />
          <Route path="/albums/:id" element={<AlbumCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
