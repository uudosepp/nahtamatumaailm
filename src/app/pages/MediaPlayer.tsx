import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

// Mock podcast data
export const episodes = [
  {
    id: "1",
    title: "Vaikuse võlu - Kuidas leida rahu igapäevases elus",
    duration: "42:15",
    date: "12. veebruar 2026",
    description: "Selles saates räägime vaikuse olulisusest meie kiires maailmas ja kuidas leida hetki sisemiseks rahuks.",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Armastuse keel - Kuidas näidata hoolivust",
    duration: "38:20",
    date: "5. veebruar 2026",
    description: "Uurime erinevaid armastuse keeli ja kuidas neid kasutada oma suhetes.",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Tõe otsijad - Vaimne teekond tänapäeval",
    duration: "45:30",
    date: "29. jaanuar 2026",
    description: "Vestlus sellest, kuidas leida tõde ja mõtet kaasaegses maailmas.",
    cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Andestuse jõud - Kuidas vabastada minevik",
    duration: "41:10",
    date: "22. jaanuar 2026",
    description: "Räägime andestamisest kui võtmest sisemisele vabanemisele ja rahusse.",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Usalduse ehitamine - Alus igale suhtele",
    duration: "39:45",
    date: "15. jaanuar 2026",
    description: "Kuidas luua ja hoida usaldust oma suhetes Jumala ja inimestega.",
    cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop"
  },
  {
    id: "6",
    title: "Palve vägi - Vestlus Jumalaga",
    duration: "44:20",
    date: "8. jaanuar 2026",
    description: "Mis on palve ja kuidas see muudab meie suhet Jumalaga ja iseendaga.",
    cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
  }
];

export function MediaPlayer() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#f5f5f0]">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl mb-4 text-[#0a0e1a]">Raadiosaated</h1>
          <p className="text-[#5a5a50] text-lg">
            Kuula meie saadet igal ajal – sügavad vestlused usust, elust ja armastusest
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Player Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white border border-[#0a0e1a]/10 rounded-2xl p-8">
              {/* Album Art */}
              <div className="aspect-square bg-white/5 rounded-xl overflow-hidden mb-6 relative">
                <img 
                  src={selectedEpisode.cover} 
                  alt={selectedEpisode.title}
                  className="w-full h-full object-cover"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-[#e8d5b5] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Episode Info */}
              <div className="mb-6">
                <h2 className="text-xl mb-2 leading-tight text-[#0a0e1a]">{selectedEpisode.title}</h2>
                <p className="text-sm text-[#5a5a50]">{selectedEpisode.date}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="relative w-full h-2 bg-[#0a0e1a]/10 rounded-full overflow-hidden cursor-pointer group">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#0a0e1a] transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-[#5a5a50]">
                  <span>0:00</span>
                  <span>{selectedEpisode.duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <button className="w-10 h-10 flex items-center justify-center hover:bg-[#0a0e1a]/10 rounded-full transition-colors text-[#0a0e1a]">
                  <SkipBack className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    if (!isPlaying) {
                      // Simulate progress
                      const interval = setInterval(() => {
                        setProgress(prev => {
                          if (prev >= 100) {
                            clearInterval(interval);
                            setIsPlaying(false);
                            return 0;
                          }
                          return prev + 1;
                        });
                      }, 400);
                    }
                  }}
                  className="w-14 h-14 flex items-center justify-center bg-[#0a0e1a] hover:bg-[#2a3a4a] rounded-full transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </button>
                
                <button className="w-10 h-10 flex items-center justify-center hover:bg-[#0a0e1a]/10 rounded-full transition-colors text-[#0a0e1a]">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-[#5a5a50]" />
                <div className="flex-1 h-1 bg-[#0a0e1a]/10 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#0a0e1a]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Episodes List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {episodes.map((episode) => (
                <button
                  key={episode.id}
                  onClick={() => {
                    setSelectedEpisode(episode);
                    setIsPlaying(false);
                    setProgress(0);
                  }}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    selectedEpisode.id === episode.id
                      ? 'bg-white border-[#0a0e1a]/20'
                      : 'bg-white/50 border-[#0a0e1a]/10 hover:bg-white'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-[#0a0e1a]/5 rounded-lg overflow-hidden">
                      <img 
                        src={episode.cover} 
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 line-clamp-1 text-[#0a0e1a]">{episode.title}</h3>
                      <p className="text-sm text-[#5a5a50] mb-2 line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#5a5a50]">
                        <span>{episode.date}</span>
                        <span>•</span>
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}