import { Phone, Mail, Heart } from "lucide-react";

export function CounselingSection() {
  return (
    <section id="nõustamine" className="py-24 bg-gradient-to-r from-[#7b553d] to-[#5a3e2a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Nõustamiskabinet</h2>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Vajad kellegi kuulavat kõrva? Pakume vaimset ja isiklikku nõustamist 
              turvalisas ja usaldusväärses keskkonnas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left: Call us */}
            <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-white text-xl">Helista meile</h3>
                <p className="text-white/80 mb-3">Võta ühendust esmase vestluse jaoks</p>
                <a 
                  href="tel:+372XXXXXXX" 
                  className="text-white hover:text-white/80 transition-colors text-lg"
                >
                  +372 XXX XXXX
                </a>
              </div>
            </div>
            
            {/* Right: Book time */}
            <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-white text-xl">Broneeri aeg</h3>
                <p className="text-white/80 mb-3">Kirjuta meile et leppida kokku sobiv aeg</p>
                <a 
                  href="mailto:info@nahtamatumaailm.ee"
                  className="text-white hover:text-white/80 transition-colors text-lg break-all"
                >
                  info@nahtamatumaailm.ee
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-sm text-white/80 text-center leading-relaxed">
              Kõik vestlused on konfidentsiaalsed. Me ei mõista hukka, vaid kuulame ja toetame.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}