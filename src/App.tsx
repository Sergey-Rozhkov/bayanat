import { useEffect } from "react";

import { photos } from "./sampleData.ts";
function App() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <div>
        <div>Select Album</div>
        <select>
          <option value="1">quidem molestiae enim</option>
          <option value="2">unt qui excepturi placeat culpa</option>
          <option value="...">...</option>
          <option value="100">enim repellat iste</option>
        </select>
        <div />
        <div>
          {photos.map((photo) => (
            <div>
              <img
                src={photo.thumbnailUrl}
                key={photo.id}
                alt={photo.title}
                style={{ width: "90%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
