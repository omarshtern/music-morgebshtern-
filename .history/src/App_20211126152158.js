import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const artis = 'Morgenshtern'
  const image = './images/morgen.jpg'
  const [songs] = useState([
    {
      title: "Show",
      artist: artis,
      img_src: image,
      src: "./music/SHOW.mp3",
    },
    {
      title: "Dulo",
      artist: "Morgenshtern",
      img_src: image,
      src: "./music/DULO.mp3",
    },
    {
      title: "El Problema",
      artist: artis,
      img_src: image,
      src: "./music/MORGENSHTERN_&_Тимати_El_Problema_Prod_SLAVA_MARLOW_Премьера_Клипа.mp3",
    },
    {
      title: 'Aristocrat',
      artist: artis,
      img_src: image,
      src: "./music/ARISTOCRAT.mp3",
    },
 

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;