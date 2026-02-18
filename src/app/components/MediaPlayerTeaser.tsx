import { Headphones, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";
import { episodes } from "../pages/MediaPlayer";

export function MediaPlayerTeaser() {
  const latestEpisode = episodes[0];

  return (
    <section id="meediamängija" className="py-24 bg-gradient-to-r from-[#7b553d] to-[#5a3e2a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-4 text-white">Raadiosaated & Podcast</h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                Kuula meie saadet igal ajal. Sügavad vestlused, mõtisklused ja muusika, 
                mis puudutab hinge.
              </p>
              <Link 
                to="/saated"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7b553d] rounded-full hover:bg-white/90 transition-colors group"
              >
                <span>Kuula saateid</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right: Latest Episode */}
            <Link 
              to="/saated"
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-transform group-hover:scale-105">
                {/* Episode Cover */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={latestEpisode.cover}
                    alt={latestEpisode.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-[#7b553d] ml-0.5" />
                        </div>
                        <span className="text-xs text-white/80 uppercase tracking-wider">Uusim saade</span>
                      </div>
                      <h3 className="text-white text-lg leading-tight mb-2 line-clamp-2">{latestEpisode.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-white/70">
                        <span>{latestEpisode.date}</span>
                        <span>•</span>
                        <span>{latestEpisode.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}