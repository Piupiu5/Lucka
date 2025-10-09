export default function Services() {
  const services = [
    { title: "Web Development", desc: "Modern and responsive websites." },
    { title: "App Development", desc: "Cross-platform mobile applications." },
    { title: "UI/UX Design", desc: "User-friendly and visually appealing designs." },
  ];

  return (
    <section className="py-20 px-8 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
