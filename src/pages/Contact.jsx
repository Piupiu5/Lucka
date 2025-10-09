export default function Contact() {
  return (
    <section className="py-20 px-8 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-3" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-3" />
        <textarea placeholder="Message" className="w-full p-3 border rounded mb-3"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
