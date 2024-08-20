import { createContext, useEffect, useState, PropsWithChildren } from "react";
import { Album } from "../types";

export const AlbumsContext = createContext<Array<Album>>([]);

export default function AlbumsProvider({ children }: PropsWithChildren) {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albums) => setAlbums(albums))
      .catch(() => console.error("Something went wrong"));
  }, []);

  return (
    <AlbumsContext.Provider value={albums}>
      {children}
    </AlbumsContext.Provider>
  );
}
