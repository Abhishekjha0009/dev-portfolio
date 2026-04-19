import { useState } from "react";
import { Send, Mail } from "lucide-react";



export default function Contact({ email, socialLinks }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <a
            href={`mailto:${email}`}
            className="text-[#a0a0b8] hover:text-violet-400 flex items-center gap-2 justify-center transition-colors"
          >
            <Mail size={16} /> {email}
          </a>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <p className="text-3xl mb-4">🎉</p>
              <p className="text-white font-semibold text-xl">Message Sent!</p>
              <p className="text-[#a0a0b8] mt-2">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-violet-400 hover:text-violet-300 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a0a0b8] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Abhishek Kumar"
                    className="w-full bg-white/10 border border-white/10 focus:border-violet-500 outline-none text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a0a0b8] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="officialabhishek9574@gmail.com"
                    className="w-full bg-white/10 border border-white/10 focus:border-violet-500 outline-none text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#a0a0b8] mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Abhishek, I'd love to work with you on..."
                  className="w-full bg-white/10 border border-white/10 focus:border-violet-500 outline-none text-white placeholder:text-white/30 rounded-xl px-4 py-3 text-sm resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]"
              >
                <Send size={16} /> Send Message
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}