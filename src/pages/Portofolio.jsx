export default function Portfolio() {
  const projects = [
    { img: "https://via.placeholder.com/300", title: "Project A" },
    { img: "https://via.placeholder.com/300", title: "Project B" },
    { img: "https://via.placeholder.com/300", title: "Project C" },
  ];

  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="shadow-md rounded-lg overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <h3 className="text-lg font-semibold mt-3 mb-2">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
