import { ExternalLink, PlayCircle, Loader2, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import profileImg from "../../assets/channels4_profile.jpg";

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
        
        if (data.status === "ok" && data.items && data.items.length > 0) {
          const formattedVideos = data.items.slice(0, 7).map((item: any) => ({
            id: item.guid.split(":")[2] || item.link.split("v=")[1],
            title: item.title,
            thumbnail: `https://i.ytimg.com/vi/${item.guid.split(":")[2] || item.link.split("v=")[1]}/maxresdefault.jpg`,
            url: item.link
          }));
          setVideos(formattedVideos);
        } else if (data.status === "ok" && (!data.items || data.items.length === 0)) {
           // No videos found, but not strictly an error
           setVideos([]);
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
          ) : error || (videos.length === 0 && !isLoading) ? (
            <div className="max-w-4xl mx-auto py-10">
              <div className="bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10">
                <div className="relative group shrink-0">
                   <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition-transform group-hover:scale-105">
                     <img 
                       src={profileImg} 
                       alt="Nähtamatu Maailm" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Nähtamatu maailm / Invisible world</h3>
                  <p className="text-gray-500 font-medium mb-4">@Nahtamatu_maailm</p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Kõik meie jutlused, mõtisklused ja õpetused on mugavalt leitavad meie YouTube'i kanalilt.
                  </p>
                  <a 
                    href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:shadow-lg active:scale-95 group"
                  >
                    <Youtube className="w-6 h-6" />
                    Mine kanalile
                  </a>
                </div>
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
