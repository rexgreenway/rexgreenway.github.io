import { useNavigate } from "react-router-dom";

import { ALBUMS, getThumbnailURL } from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";

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
