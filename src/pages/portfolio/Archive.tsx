import { useNavigate } from "react-router-dom";

import { ALBUMS } from "../../api/rex-api/loadAlbums";
import { getThumbnailURL } from "../../api/rex-api/fetchPhotography";

import { Thumbnail, ThumbnailGrid } from "../../containers/Thumbnail";
import { useState } from "react";

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

const PASSWORD = "rex";

const PasswordModal = ({
  onCorrectPassword,
}: {
  onCorrectPassword: () => void;
}) => {
  const [wrongPwEntered, setWrongPwEntered] = useState<boolean>(false);

  const enterPassword = (formData: FormData) => {
    const pw = formData.get("password");

    if (pw === PASSWORD) {
      onCorrectPassword();
    } else {
      setWrongPwEntered(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          enterPassword(formData);
        }}
      >
        <h2>Enter Password:</h2>
        <input type="text" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>

      {wrongPwEntered && <h3 style={{ color: "red" }}>WRONG PASSWORD</h3>}
    </div>
  );
};

const ArchiveGuard = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) {
    return <Archive />;
  }

  return <PasswordModal onCorrectPassword={() => setAuthenticated(true)} />;
};

export default ArchiveGuard;
