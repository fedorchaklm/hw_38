import { useContext } from "react";
// import { Album } from "../../types";
import styles from "./Albums.module.css";
import { Link } from "react-router-dom";
import { AlbumsContext } from "../../context/AlbumsProvider";

export default function Albums() {
  const albums = useContext(AlbumsContext);
  return (
    <ul className={styles.albumList}>
      {albums.map((album) => (
        <li key={album.id} className={styles.albumList__item}>
          <p>{album.id}</p>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
      ))}
    </ul>
  );
}
