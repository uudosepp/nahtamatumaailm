import { ExternalLink, PlayCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export function YouTubeSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CHANNEL_ID = "UCDPzs8dW216jEMvuoQsVV3w";

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true);
        // Using rss2json as a free proxy to get YouTube RSS feed without API key
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
        );
        
        if (!response.ok) throw new Error("Viga videote laadimisel");
        
        const data = await response.json();
        
        if (data.status === "ok") {
          const formattedVideos = data.items.slice(0, 7).map((item: any) => ({
            id: item.guid.split(":")[2] || item.link.split("v=")[1],
            title: item.title,
            thumbnail: `https://i.ytimg.com/vi/${item.guid.split(":")[2] || item.link.split("v=")[1]}/maxresdefault.jpg`,
            url: item.link
          }));
          setVideos(formattedVideos);
        } else {
          throw new Error("Andmete töötlemine ebaõnnestus");
        }
      } catch (err) {
        console.error("YouTube fetch error:", err);
        setError("Ei õnnestunud laadida viimaseid videoid.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <section id="videod" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/5 pointer-events-none z-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Viimased videod
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-loose max-w-4xl mx-auto">
              Jutlused, mõtisklused ja õpetused meie YouTube kanalilt
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-[#7b553d]" />
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              {error}
              <div className="mt-4">
                <a 
                  href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7b553d] underline"
                >
                  Külasta kanalit otse
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group col-span-1 lg:col-span-1"
                >
                  <div className="relative aspect-video bg-[#0a0e1a]/5 rounded-lg overflow-hidden mb-3 shadow-sm">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault is not available
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('hqdefault')) {
                          target.src = target.src.replace('maxresdefault', 'hqdefault');
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-lg" />
                    </div>
                    {/* Play icon always visible on mobile */}
                    <div className="absolute inset-0 flex items-center justify-center lg:hidden">
                       <PlayCircle className="w-10 h-10 text-white/70" />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium leading-snug text-gray-800 group-hover:text-[#7b553d] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </a>
              ))}
              
              {/* See More Card */}
              <a
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group col-span-1 lg:col-span-1"
              >
                <div className="relative aspect-video bg-[#7b553d]/5 hover:bg-[#7b553d]/10 rounded-lg overflow-hidden mb-3 flex flex-col items-center justify-center transition-colors border-2 border-dashed border-[#7b553d]/20">
                  <ExternalLink className="w-8 h-8 text-[#7b553d] mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-[#7b553d] uppercase tracking-wider">Vaata veel</span>
                </div>
                <h3 className="text-sm leading-snug text-gray-500 text-center italic">
                  Külasta meie kanalit
                </h3>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
