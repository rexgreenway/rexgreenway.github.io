const API_URL = "http://localhost:8000";
// const API_URL = "https://rex-api-505972842640.europe-west2.run.app";

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
    console.error(error.message);
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
    console.error(error.message);
  }
}

export { getAlbum, getPhoto };
