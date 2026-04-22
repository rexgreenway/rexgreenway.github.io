import { useNavigate } from "react-router-dom";

import { rexApi } from "@api";

import { ALBUMS } from "../../api/rex-api/loadAlbums";

import {
  Thumbnail,
  ThumbnailGrid,
} from "../../components/containers/Thumbnail";

const Archive = () => {
  const navigate = useNavigate();

  return (
    <ThumbnailGrid>
      {Object.entries(ALBUMS).map(([key, album]) => (
        <Thumbnail
          key={key}
          imageSrc={rexApi.getThumbnailURL(album.thumbnail)}
          title={album.name}
          onClick={() => navigate(key)}
        />
      ))}
    </ThumbnailGrid>
  );
};

export default Archive;
