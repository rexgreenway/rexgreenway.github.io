import { ReactElement, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { getAlbum, getPhoto, Image } from "../../api/rex-api/fetchPhotography";

import SectionTitle from "../../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";
import { ImageModal } from "../../containers/Modal";

import data from "../../assets/albums.json";

import styles from "./Collection.module.css";

const COLLECTIONS: { [key: string]: Collection } = data;

interface Collection {
  name: string;
  thumbnail: {
    album_name: string;
    image_name: string;
  };
  albums: {
    name: string;
    film_stock: string;
  }[];
}

const ThumbnailSection = ({
  album_name,
  handleOpen,
  film_stock,
}: {
  album_name: string;
  handleOpen: (album: string, path: string) => void;
  film_stock?: string;
}) => {
  const [albumSection, setAlbumSection] = useState<ReactElement>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<boolean>(false);

  useEffect(() => {
    getAlbum(album_name)
      .then((album) => {
        setAlbumSection(
          <ThumbnailGrid>
            {album.images.map((image: Image) => (
              <Thumbnail
                key={`${album_name}/${image.path}`}
                onClick={() => handleOpen(album.name, image.path)}
                imageSrc={image.url}
              />
            ))}
          </ThumbnailGrid>
        );
        setLoaded(true);
      })
      .catch(() => {
        setFetchError(true);
        setLoaded(true);
      });
  }, [album_name, handleOpen]);

  return (
    <>
      {film_stock && <h3>{film_stock}</h3>}
      {fetchError && (
        <p style={{ color: "red" }}>ERROR RETRIEVING ALBUM: '{album_name}'</p>
      )}
      {loaded ? albumSection : <CircularProgress color="inherit" />}
    </>
  );
};

const Collection = () => {
  const { collectionId } = useParams();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  const handleOpen = (album: string, path: string) => {
    const split = path.split("/");
    const name = split[split.length - 1];
    getPhoto(album, name).then((image) => {
      setImageSrc(image.url);
      setOpenModal(true);
    });
  };

  if (!(collectionId! in COLLECTIONS)) {
    return <h2>NO SUCH COLLECTION...</h2>;
  }

  const collection = COLLECTIONS[collectionId!];

  return (
    <>
      <div className={styles.CollectionHeader}>
        <NavLink to="" className={styles.Back}>
          {"<- Back"}
        </NavLink>
        <SectionTitle title={collection.name} />
      </div>
      {collection.albums.map((a) => (
        <ThumbnailSection
          key={a.name}
          album_name={a.name}
          handleOpen={handleOpen}
          film_stock={a.film_stock}
        />
      ))}

      <ImageModal
        isOpen={openModal}
        close={() => setOpenModal(false)}
        src={imageSrc}
      />
    </>
  );
};

export default Collection;
