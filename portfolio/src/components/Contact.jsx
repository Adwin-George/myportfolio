import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-16 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT INFO */}
          <div className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm">
            <div className="text-sm text-gray-600 dark:text-gray-300">Email</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">
              adwingeorge16@gmail.com
            </div>
            <br></br>
            <div className="text-sm text-gray-600 dark:text-gray-300">Phone no:</div>
            <div className="mt-1 text-gray-900 dark:text-gray-100 font-medium">
              +91 9146748240
            </div>

            <div className="mt-6">
              <div className="text-sm text-gray-600 dark:text-gray-300">Links</div>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://github.com/Adwin-George"
                  className="text-gray-700 dark:text-gray-200 hover:text-gold"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/adwin-george-31100a31a"
                  className="text-gray-700 dark:text-gray-200 hover:text-gold"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm"
          >
            <label className="text-sm text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              className="w-full mt-2 p-3 rounded-md border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              rows="5"
              placeholder="Say hi..."
              required
            ></textarea>

            <div className="mt-4">
              <button type="submit" className="px-4 py-2 rounded-md bg-gold text-black font-semibold">
                Send
              </button>
            </div>

            {sent && (
              <p className="mt-4 text-green-600 dark:text-green-400 text-sm">
                ✔ Message sent (dummy only)
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
