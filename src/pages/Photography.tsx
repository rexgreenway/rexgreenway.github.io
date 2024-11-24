import { ReactElement, useEffect, useState } from "react";

import SectionTitle from "../components/SectionTitle";
import { Thumbnail, ThumbnailGrid } from "../containers/Thumbnail";
import { ImageModal } from "../containers/Modal";
import HorizontalLine from "../components/HorizontalLine";
import { getAlbum, getPhoto, Image } from "../api/rex-api/fetchPhotogrpahy";

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
      {film_stock && <h3>{film_stock}</h3>}
      {fetchError && (
        <p style={{ color: "red" }}>ERROR RETRIEVING ALBUM: '{album_name}'</p>
      )}
      {loaded ? albumSection : <p>LOADING...</p>}
    </>
  );
};

const ALBUMS = [
  {
    name: "London 2024",
    albums: [
      {
        name: "london-test-gold",
        film_stock: "Kodak Gold",
      },
      {
        name: "london-expired-konica-400",
        film_stock: "Expired Konica 400",
      },
    ],
  },
  {
    name: "Brighton",
    albums: [
      {
        name: "brighton-tmax",
        film_stock: "TMax 100",
      },
    ],
  },
  {
    name: "Brov's 60th",
    albums: [
      {
        name: "brov-bday-kono-delight-400",
        film_stock: "Ektar 100",
      },
      {
        name: "appledore-regatta-pheonix",
        film_stock: "Harman Pheonix 200",
      },
    ],
  },
  {
    name: "Malta / Kew",
    albums: [
      {
        name: "malta-kew-kentmere",
        film_stock: "Kentmere 400",
      },
    ],
  },
  {
    name: "Croatia 2024",
    albums: [
      {
        name: "croatia-2023-ektar",
        film_stock: "Ektar 100",
      },
    ],
  },
  {
    name: "LA 2024",
    albums: [
      {
        name: "la-kono-monsoon",
        film_stock: "Kono! Original Monsoon",
      },
      {
        name: "la-gold",
        film_stock: "Kodak Gold",
      },
      {
        name: "la-portra-160",
        film_stock: "Portra 160",
      },
    ],
  },
  {
    name: "Wrestling",
    albums: [
      {
        name: "wrestling-kentmere",
        film_stock: "Kentmere 400",
      },
    ],
  },
  {
    name: "South America 2023",
    albums: [
      {
        name: "lat-am-ultramax-1",
        film_stock: "Ultramax 400",
      },
      {
        name: "lat-am-ultramax-2",
        film_stock: "Ultramax 400",
      },
      {
        name: "lat-am-ektar",
        film_stock: "Ektar 100",
      },
      {
        name: "lat-am-lomo-purple",
        film_stock: "Lomo Purple",
      },
      {
        name: "lat-am-portra-400",
        film_stock: "Portra 400",
      },
    ],
  },
  {
    name: "Greece 2023",
    albums: [
      {
        name: "greece-2023-kentmere",
        film_stock: "Kentmere 400",
      },
      {
        name: "greece-2023-ektar",
        film_stock: "Ektar 100",
      },
    ],
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
  ALBUMS.forEach((collection, index) => {
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
