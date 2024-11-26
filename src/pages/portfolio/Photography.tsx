import { ReactElement, useEffect, useState } from "react";

import SectionTitle from "../../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";
import { ImageModal } from "../../containers/Modal";
import HorizontalLine from "../../components/HorizontalLine";
import {
  getAlbum,
  getPhoto,
  Image,
  Size,
} from "../../api/rex-api/fetchPhotogrpahy";

// Albums
import ALBUMS from "../../assets/albums.json";
import { useNavigate } from "react-router-dom";

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
                title="hello what if it is long"
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
      {loaded ? albumSection : <p>LOADING...</p>}
    </>
  );
};

const AlbumThumbnail = ({
  display_name,
  album_name,
  image_name = "thumbnail",
}: {
  display_name: string;
  album_name: string;
  image_name?: string;
}) => {
  const navigate = useNavigate();
  // Loads Red Image as default
  // Replace this with loading wheel?
  const [thumbnailSrc, setThumbnailSrc] = useState<string>(
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F464%2F518%2Fdesktop-wallpaper-red-background-red-screen.jpg&f=1&nofb=1&ipt=e616183af72aca7d643d24b40551f571552145836951b3a0c9999d3c723d7cc2&ipo=images"
  );

  useEffect(() => {
    getPhoto(album_name, image_name, Size.SMALL).then((photo) => {
      setThumbnailSrc(photo.url);
    });
  });

  return (
    <Thumbnail
      imageSrc={thumbnailSrc}
      title={display_name}
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

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
  ALBUMS.forEach((collection, index) => {
    // Dont need this
    if (index !== 0) {
      sections.push(<HorizontalLine key={index} />);
    }
    sections.push(
      <SectionTitle key={collection.name} title={collection.name} />
    );
    collection.albums.forEach((album) => {
      sections.push(
        <ThumbnailSection
          key={album.name}
          album_name={album.name}
          handleOpen={handleOpen}
          film_stock={album.film_stock}
        />
      );
    });
  });

  const albumThumbnails: ReactElement[] = [];

  ALBUMS.forEach((collection) => {
    albumThumbnails.push(
      <AlbumThumbnail
        display_name={collection.name}
        album_name={collection.name}
      />
    );
  });

  // PAGE:
  //  Cards of the Albums with a nice thumbnail image to choose behind
  //  Fetching albums in the background
  //  Open Album thumbnail Grids

  return (
    <>
      <ThumbnailGrid>{albumThumbnails}</ThumbnailGrid>
      <ImageModal
        isOpen={openModal}
        close={() => setOpenModal(false)}
        src={imageSrc}
      />
    </>
  );
};

export default Photography;
