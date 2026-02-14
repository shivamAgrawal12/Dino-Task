import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";

export default function MiniPlayer() {

  const ctx = useContext(PlayerContext);
  const nav = useNavigate();

  if (!ctx) return null;

  if (!ctx.mini || !ctx.current) return null;

  // Close player completely
  const closePlayer = () => {
    ctx.setMini(false);
    ctx.setCurrent(null);
    ctx.setCategory(null);

    // Go back to home
    nav("/");
  };

  // Restore fullscreen
  const restore = () => {
    ctx.setMini(false);
    nav("/player");
  };

  return (
    <div className="
      fixed bottom-0 left-0 w-full
      bg-gray-900
      p-3
      flex items-center
      shadow-2xl
      z-50
    ">

      {/* Thumbnail */}
      <img
        src={ctx.current.thumbnailUrl}
        className="w-20 h-14 rounded object-cover"
      />

      {/* Title */}
      <p className="ml-2 text-sm flex-1 truncate">
        {ctx.current.title}
      </p>

      {/* Restore */}
      <button
        onClick={restore}
        className="px-3 text-lg"
      >
        ⬆
      </button>

      {/* Close */}
      <button
        onClick={closePlayer}
        className="px-3 text-lg text-red-400"
      >
        ✖
      </button>

    </div>
  );
}
