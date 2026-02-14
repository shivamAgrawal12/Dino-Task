import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { motion } from "framer-motion";

export default function BottomSheet() {
  const ctx = useContext(PlayerContext);

  if (!ctx.category) return null;

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -250, bottom: 0 }}
      initial={{ y: 150 }}
      className="bg-gradient-to-t from-gray-950 to-gray-900
        rounded-t-3xl
        p-4
        flex-1
        overflow-hidden
        border-t border-white/10"
    >
      <h3 className="mb-2 font-semibold">
        More Videos
      </h3>

      <div className="overflow-auto h-full">

        {ctx.category.contents.map((v) => (
          <div
            key={v.slug}
            onClick={() => ctx.setCurrent(v)}
            className="flex gap-3 mb-3 cursor-pointer"
          >
            <img
              src={v.thumbnailUrl}
              className="w-24 h-16 rounded object-cover"
            />

            <p className="text-sm line-clamp-2">
              {v.title}
            </p>
          </div>
        ))}

      </div>
    </motion.div>
  );
}
