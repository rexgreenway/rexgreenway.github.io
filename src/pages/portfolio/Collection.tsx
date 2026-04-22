import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "@contexts";

import { ALBUMS } from "../../api/rex-api/loadAlbums";
import {
  getPhoto,
  getThumbnailURL,
  downloadPhoto,
} from "../../api/rex-api/fetchPhotography";

import SectionTitle from "../../components/SectionTitle";
import {
  Thumbnail,
  ThumbnailGrid,
} from "../../components/containers/Thumbnail";
import ImageModal from "../../components/modals/ImageModal";

import styles from "./Collection.module.css";

const Collection = () => {
  const { collectionId } = useParams();

  const navigate = useNavigate();
  const { token, clearToken } = useAuth();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleOpen = (image_name: string) => {
    // Open modal immediately
    setCurrentImage(image_name);
    setOpenModal(true);

    // Check valid token, if not navigate back to archive
    if (!token.token || token.expires < new Date()) {
      clearToken();
      navigate("..");
      return;
    }

    // Else get the photo using token
    getPhoto(token.token, image_name)
      .then((image) => {
        setImageSrc(image.url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        setImageSrc("FAILED");
        setCurrentImage(null);
      });
  };

  const handleClose = () => {
    setOpenModal(false);
    setImageSrc("");
    setCurrentImage(null);
  };

  const downloadImage = (image_name: string) => {
    // Check valid token, if not navigate back to archive
    if (!token.token || token.expires < new Date()) {
      clearToken();
      navigate("..");
      return;
    }

    downloadPhoto(token.token, image_name);
  };

  if (!(collectionId! in ALBUMS) || collectionId === undefined) {
    return <h2>NO SUCH COLLECTION...</h2>;
  }

  const album = ALBUMS[collectionId];

  return (
    <>
      <div className={styles.CollectionHeader}>
        <NavLink to=".." className={styles.Back}>
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

      {openModal && currentImage && (
        <ImageModal
          close={handleClose}
          src={imageSrc}
          download={() => downloadImage(currentImage)}
        />
      )}
    </>
  );
};

export default Collection;
