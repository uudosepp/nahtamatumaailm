import { MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";

function MapCard({ 
  src, 
  title, 
  city, 
  address1, 
  address2, 
  serviceTimes 
}: { 
  src: string; 
  title: string; 
  city: string; 
  address1: string; 
  address2: string; 
  serviceTimes: { label: string; times: string[] }; 
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-video bg-gray-200 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
      <div className="p-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Users className="w-6 h-6" />
          {city}
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <p>{address1}</p>
              <p>{address2}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div className="text-gray-700">
              <p className="font-semibold mb-2">{serviceTimes.label}</p>
              {serviceTimes.times.map((time, idx) => (
                <p key={idx}>{time}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="meist" className="bg-white py-16 relative">
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Meist
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-loose mb-12 text-center max-w-4xl mx-auto">
            Me oleme kogudus, kes usub, et tõeline muutus sünnib sisemises vaikuses. 
            Siin ei ole ruumi agressiivseks evangelismiks, vaid on ruum kuulamiseks, 
            kasvamiseks ja armastuseks.
          </p>

          {/* Locations & Service Times */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tallinn */}
            <MapCard
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.6364537384293!2d24.753574776890697!3d59.43696997464089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb3d9b4f8b2f%3A0x9d8b8c8c8c8c8c8c!2sVabaduse%20v%C3%A4ljak%2C%20Tallinn!5e0!3m2!1sen!2see!4v1234567890123"
              title="Tallinn asukoht"
              city="Tallinn"
              address1="Vabaduse väljak 10"
              address2="10146 Tallinn"
              serviceTimes={{
                label: "Jumalateenistused:",
                times: ["Pühapäev kell 11:00", "Kolmapäev kell 19:00 (palvekoosolek)"]
              }}
            />

            {/* Tartu */}
            <MapCard
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.9876543210987!2d26.722222222222222!3d58.38055555555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb36ed1f3f3f3f%3A0x1234567890abcdef!2sRaekoja%20plats%2C%20Tartu!5e0!3m2!1sen!2see!4v1234567890123"
              title="Tartu asukoht"
              city="Tartu"
              address1="Raekoja plats 5"
              address2="51004 Tartu"
              serviceTimes={{
                label: "Jumalateenistused:",
                times: ["Pühapäev kell 10:00", "Reede kell 18:30 (noorteõhtu)"]
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}