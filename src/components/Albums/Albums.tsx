import { Album } from "../../types";
import styles from "./Albums.module.css";
import { Link } from "react-router-dom";

type Props = {
  albums: Array<Album>;
};

export default function Albums({ albums }: Props): JSX.Element {
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
