import { useNavigate } from "react-router-dom";

import {
  ALBUMS,
  getThumbnailURL,
  wakeUp,
} from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";

const Photography = () => {
  const navigate = useNavigate();

  // Call API to wake up on navigation to Portfolio Page.
  wakeUp();

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
