import { ReactElement, useEffect, useState } from "react";

import SectionTitle from "../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../containers/Thumbnail";
import { ImageModal } from "../containers/Modal";
import HorizontalLine from "../components/HorizontalLine";

// const API_URL = "http://localhost:8000";
const API_URL = "https://rex-api-505972842640.europe-west2.run.app";

async function getAlbum(album_name: string) {
  const encoded_name = encodeURI(album_name);
  const url = `${API_URL}/photography/${encoded_name}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
}

async function getPhoto(album_name: string, image_name: string) {
  const encoded_path = encodeURI(`${album_name}/${image_name}`);
  const url = `${API_URL}/photography/${encoded_path}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error", error);
    }
  }
}

type Image = {
  path: string;
  url: string;
};

const ThumbnailSection = ({
  album_name,
  handleOpen,
}: {
  album_name: string;
  handleOpen: (album: string, path: string) => void;
}) => {
  const [albumSection, setAlbumSection] = useState<ReactElement>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    getAlbum(album_name).then((album) => {
      setAlbumSection(
        <ThumbnailGrid>
          {album.images.map((image: Image) => (
            <Thumbnail
              onClick={() => handleOpen(album.name, image.path)}
              src={image.url}
            />
          ))}
        </ThumbnailGrid>
      );
      setLoaded(true);
    });
  }, [album_name, handleOpen]);

  return (
    <>
      <HorizontalLine />
      <SectionTitle title={album_name} />
      {/* <h3>FILM-STOCK</h3> */}
      {loaded ? albumSection : <p>LOADING...</p>}
    </>
  );
};

const ALBUMS = [
  "croatia-2024",
  "greece-2023",
  "south-america-2023",
  "half-exposed",
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

  const sections = [];
  for (const album_name of ALBUMS) {
    sections.push(
      <ThumbnailSection album_name={album_name} handleOpen={handleOpen} />
    );
  }

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
