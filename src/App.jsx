import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import { PlayerProvider } from "./context/PlayerContext";
import MiniPlayer from "./components/MiniPlayer";

export default function App() {
  return (
    <PlayerProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
      </Routes>

      <MiniPlayer />

    </PlayerProvider>
  );
}
