import { ReactElement, useEffect, useState } from "react";

import SectionTitle from "../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../containers/Thumbnail";
import { ImageModal } from "../containers/Modal";
import HorizontalLine from "../components/HorizontalLine";
import { getAlbum, getPhoto, Image } from "../api/rex-api/fetchPhotogrpahy";

const ThumbnailSection = ({
  album_name,
  handleOpen,
}: // film_stock,
{
  album_name: string;
  handleOpen: (album: string, path: string) => void;
  // film_stock?: string;
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
                src={image.url}
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
      <SectionTitle title={album_name} />
      {/* {film_stock && <h3>{film_stock}</h3>} */}
      {fetchError && (
        <p style={{ color: "red" }}>ERROR RETRIEVING ALBUM: '{album_name}'</p>
      )}
      {loaded ? albumSection : <p>LOADING...</p>}
    </>
  );
};

const ALBUMS_NEW = [
  {
    name: "croatia-2024",
    display_name: "Croatia 2024",
    film_stock: "test-1",
  },
  {
    name: "greece-2023",
    display_name: "Greece 2023",
    film_stock: "test-2",
  },
  {
    name: "south-america-2023",
    display_name: "South America 2023",
    film_stock: "test-3",
  },
  {
    name: "half-exposed",
    display_name: "Half Exposed",
    film_stock: "test-4",
  },
];

const Photography = () => {
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

  const sections: ReactElement[] = [];
  ALBUMS_NEW.forEach((album, index) => {
    if (index !== 0) {
      sections.push(<HorizontalLine key={index} />);
    }
    sections.push(
      <ThumbnailSection
        key={album.name}
        album_name={album.name}
        handleOpen={handleOpen}
        // film_stock={album.film_stock}
      />
    );
  });

  return (
    <>
      {sections}
      <ImageModal
        isOpen={openModal}
        close={() => setOpenModal(false)}
        src={imageSrc}
      />
    </>
  );
};

export default Photography;
