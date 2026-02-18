import { Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#0a0e1a]/10 bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl mb-4 text-[#0a0e1a]">Nähtamatu Maailm</h3>
            <p className="text-[#5a5a50] leading-relaxed">
              Valgus, mis ei karju, vaid on kohal. Ruum vaikuse, tõe ja sisemise kasvu jaoks.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#0a0e1a]">Kontakt</h4>
            <div className="space-y-3 text-[#5a5a50]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+372 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>info@nahtamatumaailm.ee</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-[#0a0e1a]">Jälgi meid</h4>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.youtube.com/@Nahtamatu_maailm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0a0e1a]/5 hover:bg-[#0a0e1a]/10 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5 text-[#0a0e1a]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#0a0e1a]/10 text-center text-[#5a5a50] text-sm">
          <p>© 2026 Nähtamatu Maailm. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}