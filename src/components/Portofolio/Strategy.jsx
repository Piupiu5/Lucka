import { ArrowRight } from "lucide-react";
import hero from "../../assets/hero.jpg";

export default function Strategy() {
  const steps = [
    { title: "Photography" },
    { title: "Videography" },
    { title: "Desain Feed" },
    { title: "Copywriting" },
    { title: "Collaboration" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-10 space-y-10">
      {/* === Strategi Kita Section === */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Strategi Kita</h2>

        <div className="flex justify-center mb-4">
          <img
            src={hero}
            alt="Camera Icon"
            className="w-28 h-28 object-cover rounded-xl shadow-md"
          />
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Kami memutuskan untuk menyusun strategi berbasis audience insight:
          apa yang mereka suka, gaya bahasa seperti apa yang relatable, dan
          format konten mana yang paling engaging.
        </p>
      </div>

      {/* === Eksekusi Lucka Section === */}
      <div className="text-center w-full">
        <h3 className="text-3xl font-bold text-orange-500 mb-8">Eksekusi Lucka</h3>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-orange-500 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 p-6 flex flex-col items-center justify-center space-y-2 w-40 h-40">
                <img
                  src={hero}
                  alt={step.title}
                  className="rounded-full w-20 h-20 object-cover shadow-sm"
                />
                <p className="font-semibold text-white">{step.title}</p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="text-orange-500 mx-4 w-6 h-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
