import logo from "figma:asset/716230bab09e57bc5129eb25325ef3976a01b50b.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#7b553d] pt-20">
      <div className="container mx-auto px-6 py-32 relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Logo */}
          <div className="flex justify-center animate-[fadeInUp_1s_ease-out]">
            <img 
              src={logo} 
              alt="Nähtamatu Maailm" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-white flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_0.2s_both]">
            <span className="tracking-[0.15em] md:whitespace-nowrap">Nähtamatu<br className="md:hidden" /> maailm</span>
            <span className="tracking-[0.35em] md:whitespace-nowrap border-b-2 border-white pb-4">Ei ole <br className="md:hidden" /> kaugel</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed uppercase animate-[fadeInUp_1s_ease-out_0.4s_both]">
            See algab vaikuses, valguses ja tõe otsingus.
          </p>
        </div>
      </div>
    </section>
  );
}