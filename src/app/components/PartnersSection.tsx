export function PartnersSection() {
  const partners = [
    { name: "Eesti Evangeelne Luterlik Kirik", abbr: "EELK" },
    { name: "Eesti Metodisti Kirik", abbr: "EMK" },
    { name: "Eesti Vabakoguduste Liit", abbr: "EVL" },
    { name: "Eesti Kristlik Baptisti Kogudus", abbr: "EKBK" },
    { name: "Eesti Nelipühi Kirik", abbr: "ENK" },
    { name: "Eesti Apostlik Õigeusu Kirik", abbr: "EAÕK" },
  ];

  return (
    <section className="bg-[#f5f5f0] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Partnerid
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-loose mb-12 text-center max-w-4xl mx-auto">
            Koostöös teiste kristlike kogudustega üle Eesti
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#7b553d] to-[#5a3e2a] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {partner.abbr}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}