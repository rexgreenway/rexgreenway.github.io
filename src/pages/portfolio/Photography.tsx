import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPhoto, Image, Size } from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";

import Collection from "./Collection";
import data from "../../assets/albums.json";

const COLLECTIONS: { [key: string]: Collection } = data;

const CollectionThumbnail = ({
  url,
  displayName,
  thumbnailAlbum,
  thumbnailImage,
}: {
  url: string;
  displayName?: string;
  thumbnailAlbum?: string;
  thumbnailImage?: string;
}) => {
  const navigate = useNavigate();

  const [thumbnailSrc, setThumbnailSrc] = useState<string>("");

  useEffect(() => {
    if (thumbnailAlbum && thumbnailImage) {
      getPhoto(thumbnailAlbum, thumbnailImage, Size.SMALL).then(
        (photo: Image) => {
          setThumbnailSrc(photo.url);
        }
      );
    } else {
      setThumbnailSrc(
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F464%2F518%2Fdesktop-wallpaper-red-background-red-screen.jpg&f=1&nofb=1&ipt=e616183af72aca7d643d24b40551f571552145836951b3a0c9999d3c723d7cc2&ipo=images"
      );
    }
  }, [thumbnailAlbum, thumbnailImage]);

  return (
    <Thumbnail
      imageSrc={thumbnailSrc}
      title={displayName}
      onClick={() => {
        navigate(url);
      }}
    />
  );
};

const Photography = () => {
  const collections = Object.keys(COLLECTIONS);
  return (
    <ThumbnailGrid>
      {collections.map((c) => {
        const collectionName = COLLECTIONS[c].name;
        const collectionThumbnail = COLLECTIONS[c].thumbnail;
        return (
          <CollectionThumbnail
            key={c}
            url={c}
            displayName={collectionName}
            thumbnailAlbum={
              collectionThumbnail && collectionThumbnail.album_name
            }
            thumbnailImage={
              collectionThumbnail && collectionThumbnail.image_name
            }
          />
        );
      })}
    </ThumbnailGrid>
  );
};

export default Photography;
