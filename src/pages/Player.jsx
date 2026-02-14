import YouTube from "react-youtube";
import { useContext, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";
import BottomSheet from "../components/BottomSheet";
import { motion } from "framer-motion";

export default function Player() {

  const ctx = useContext(PlayerContext);
  const playerRef = useRef(null);

  // Safety
  if (!ctx || !ctx.current) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400">
        No video selected
      </div>
    );
  }

  // Extract video id
  const videoId = ctx.current.mediaUrl.split("/embed/")[1];

  // When player loads
  const onReady = (e) => {
    playerRef.current = e.target;
    e.target.playVideo();
  };

  // Play / Pause
  const playPause = () => {
    if (!playerRef.current) return;

    const state = playerRef.current.getPlayerState();

    if (state === 1) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  // Skip
  const skip = (sec) => {
    if (!playerRef.current) return;

    const time = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(time + sec, true);
  };

  return (
    <div className="h-screen bg-black flex flex-col relative">

      {/* Video */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        onDragEnd={(e, info) => {
          if (info.point.y > 150) {
            ctx.setMini(true);
          }
        }}
        className="relative"
      >

        <YouTube
          videoId={videoId}
          opts={{
            width: "100%",
            height: "320",
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              enablejsapi: 1,
              origin: window.location.origin, // ✅ FIX
            },
          }}
          onReady={onReady}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        {/* Title */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <p className="text-sm font-semibold line-clamp-2">
            {ctx.current.title}
          </p>
        </div>

      </motion.div>

      {/* Controls */}
      <div className="
        flex justify-center items-center gap-6
        py-4 bg-black/80 backdrop-blur
        border-t border-white/10
      ">

        <button
          onClick={() => skip(-10)}
          className="control-btn"
        >
          ⏪
        </button>

        <button
          onClick={playPause}
          className="control-btn text-xl"
        >
          ▶ / ⏸
        </button>

        <button
          onClick={() => skip(10)}
          className="control-btn"
        >
          ⏩
        </button>

        <button
          onClick={() => ctx.setMini(true)}
          className="control-btn"
        >
          ⬇
        </button>

      </div>

      {/* Related Videos */}
      <BottomSheet />

    </div>
  );
}
