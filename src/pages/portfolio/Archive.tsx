import { useNavigate } from "react-router-dom";

import { rexApi } from "@api";

import { ThumbnailGrid, Thumbnail } from "@components/containers";

import ALBUMS from "../../assets/albums";

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
