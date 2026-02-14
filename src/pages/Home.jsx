import { data } from "../data/videos";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const nav = useNavigate();
  const ctx = useContext(PlayerContext);

  const openVideo = (video, category) => {
    ctx.setCurrent(video);
    ctx.setCategory(category);
    ctx.setMini(false);
    nav("/player");
  };

  return (
    <div className="p-3 max-w-7xl mx-auto">

      <h1 className="text-2xl font-bold mb-4 text-center">
        Video Player App
      </h1>

      {data.categories.map((cat) => (
        <div key={cat.category.slug} className="mb-6">

          <h2 className="text-xl font-semibold mb-3">
            {cat.category.name}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">

            {cat.contents.map((video) => (
              <VideoCard
                key={video.slug}
                video={video}
                onClick={() => openVideo(video, cat)}
              />
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}
