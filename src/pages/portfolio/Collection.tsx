import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  ALBUMS,
  getPhoto,
  getThumbnailURL,
} from "../../api/rex-api/fetchPhotography";

import SectionTitle from "../../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";
import { ImageModal } from "../../containers/Modal";

import styles from "./Collection.module.css";

const Collection = () => {
  const { collectionId } = useParams();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  const handleOpen = (image_name: string) => {
    // Open modal immediately
    setOpenModal(true);
    getPhoto(image_name)
      .then((image) => {
        setImageSrc(image.url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setImageSrc("FAILED");
      });
  };

  const handleClose = () => {
    setOpenModal(false);
    setImageSrc("");
  };

  if (!(collectionId! in ALBUMS) || collectionId === undefined) {
    return <h2>NO SUCH COLLECTION...</h2>;
  }

  const album = ALBUMS[collectionId];

  return (
    <>
      <div className={styles.CollectionHeader}>
        <NavLink to="../" className={styles.Back}>
          {"<- Back"}
        </NavLink>
        <div className={styles.CollectionTitle}>
          <SectionTitle title={album.name} />
          {album.film_stock && (
            <h3>
              {"{ "}
              {album.film_stock}
              {" }"}
            </h3>
          )}
        </div>
      </div>
      <ThumbnailGrid>
        {Object.entries(album.photos).map(([name]) => (
          <Thumbnail
            key={name}
            onClick={() => handleOpen(name)}
            imageSrc={getThumbnailURL(name)}
          />
        ))}
      </ThumbnailGrid>

      <ImageModal isOpen={openModal} close={handleClose} src={imageSrc} />
    </>
  );
};

export default Collection;
