import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { rexApi } from "@api";
import { useAuth } from "@contexts";

import { Thumbnail, ThumbnailGrid } from "@components/containers";
import { ImageModal } from "@components/modals";

import SectionTitle from "../../components/SectionTitle";

import ALBUMS from "../../assets/albums";

import styles from "./Collection.module.css";

const Collection = () => {
  const { collectionId } = useParams();

  const navigate = useNavigate();
  const { token, clearToken } = useAuth();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  const [currentImage, setCurrentImage] = useState<{
    name: string;
    index: number;
  } | null>(null);

  // Handle if incorrect collection id
  if (!collectionId || !(collectionId in ALBUMS)) {
    return <h2>NO SUCH COLLECTION...</h2>;
  }

  // Fetch and Transform images
  const album = ALBUMS[collectionId];
  const albumImages = Object.keys(album.photos);

  const handleOpen = (name: string, index: number) => {
    // Open modal immediately
    setCurrentImage({ name, index });
    setOpenModal(true);

    // Check valid token, if not navigate back to archive
    if (!token.token || token.expires < new Date()) {
      clearToken();
      navigate("..");
      return;
    }

    // Else get the photo using token
    rexApi
      .getPhoto(token.token, name)
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

  const handlePrev = (currentIndex: number) => {
    const prevIndex = currentIndex - 1;
    const prevImage = albumImages[prevIndex];
    if (!prevImage) return;
    handleOpen(prevImage, prevIndex);
  };

  const handleNext = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    const nextImage = albumImages[nextIndex];
    if (!nextImage) return;
    handleOpen(nextImage, nextIndex);
  };

  const downloadImage = (image_name: string) => {
    if (!token.token || token.expires < new Date()) {
      clearToken();
      navigate("..");
      return;
    }

    rexApi.downloadPhoto(token.token, image_name);
  };

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
        {albumImages.map((name, index) => {
          return (
            <Thumbnail
              key={name}
              onClick={() => handleOpen(name, index)}
              imageSrc={rexApi.getThumbnailURL(name)}
            />
          );
        })}
      </ThumbnailGrid>

      {openModal && currentImage && (
        <ImageModal
          close={handleClose}
          src={imageSrc}
          download={() => downloadImage(currentImage.name)}
          prev={
            currentImage.index > 0
              ? () => handlePrev(currentImage.index)
              : undefined
          }
          next={
            currentImage.index < albumImages.length - 1
              ? () => handleNext(currentImage.index)
              : undefined
          }
        />
      )}
    </>
  );
};

export default Collection;
