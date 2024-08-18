import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photo } from "../../types";
import styles from './AlbumCard.module.css';

export default function AlbumCard() {
  const { id } = useParams();
  const [photos, setPhotos] = useState<Array<Photo>>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((photos) => setPhotos(photos));
  }, [id]);

  return (
    <div className={styles.cardWrap}>
    <h1>Photos</h1>
    <ul className={styles.cardList}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title}/>
        </li>
      ))}
    </ul>
    </div>
  );
}
