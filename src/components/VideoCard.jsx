export default function VideoCard({ video, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer 
        rounded-xl 
        overflow-hidden
        bg-gray-900
        shadow-md
        hover:shadow-xl
        hover:scale-[1.03]
        active:scale-95
        transition-all
        duration-200
      "
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          loading="lazy"
          className="w-full h-40 sm:h-44 md:h-48 object-cover"
        />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition">
          ▶
        </div>
      </div>

      {/* Title */}
      <div className="p-2">
        <p className="text-sm sm:text-base font-medium line-clamp-2">
          {video.title}
        </p>
      </div>
    </div>
  );
}
