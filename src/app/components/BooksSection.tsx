import { ExternalLink } from "lucide-react";

// Import book covers from assets
import cover1 from "../../assets/ElementaryDoctrines_cover.pdf.webp";
import cover2 from "../../assets/Tabletid-kaas-1000x1635.webp";
import cover3 from "../../assets/Muidasjutud_kaas_CMYK_-e1721218319323-1000x1430.webp";
import cover4 from "../../assets/Haal-Oos_KAAS_-1000x1433.webp";

const books = [
  {
    id: "1",
    title: "Algõpetused, mida meile oleks tulnud õpetada",
    author: "Sam Soleyn",
    cover: cover1
  },
  {
    id: "2",
    title: "Tabletid – ülemarst soovitab",
    author: "Riina Aasa",
    cover: cover2
  },
  {
    id: "3",
    title: "Kuningapoeg ja valge hobune",
    author: "Riina Aasa",
    cover: cover3
  },
  {
    id: "4",
    title: "Hääl öös",
    author: "MTÜ IAM Centre",
    cover: cover4
  }
];

export function BooksSection() {
  return (
    <section id="raamatud" className="py-16 bg-white relative overflow-hidden">
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/5 pointer-events-none z-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Raamatud
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-loose max-w-4xl mx-auto">
              Sügavad mõtisklused ja õpetused vaimseks kasvuks
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {books.map((book) => (
              <div key={book.id} className="group">
                <div className="relative aspect-[3/4.5] mb-4 overflow-hidden rounded-lg bg-[#0a0e1a]/5 shadow-sm">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="mb-1 text-[#0a0e1a] font-medium leading-snug line-clamp-2">{book.title}</h3>
                <p className="text-sm text-[#5a5a50]">{book.author}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://iamcentre.ee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7b553d] text-white rounded-full hover:bg-[#5a3e2a] transition-colors group"
            >
              <span>Vaata kogu kataloogi</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
