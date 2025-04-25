import { useNavigate } from "react-router-dom";

import { getThumbnailURL } from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";

import data from "../../assets/albums.json";

const ALBUMS: { [key: string]: Album } = data;

interface PhotoInfo {
  film_stock?: string;
}

interface Album {
  name: string;
  thumbnail: string;
  photos: { [name: string]: PhotoInfo };
}

const Photography = () => {
  const navigate = useNavigate();

  return (
    <ThumbnailGrid>
      {Object.entries(ALBUMS).map(([key, album]) => (
        <Thumbnail
          key={key}
          imageSrc={getThumbnailURL(album.thumbnail)}
          title={album.name}
          onClick={() => navigate(key)}
        />
      ))}
    </ThumbnailGrid>
  );
};

export default Photography;
