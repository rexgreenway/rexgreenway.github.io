import { useNavigate } from "react-router-dom";

import { ALBUMS } from "../../api/rex-api/loadAlbums";
import { getThumbnailURL } from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";

const Archive = () => {
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

export default Archive;
