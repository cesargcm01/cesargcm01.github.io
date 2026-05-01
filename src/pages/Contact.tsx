import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-5 gap-0 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Contact Information */}
          <div className="md:col-span-2 bg-slate-900/50 p-10 text-white flex flex-col justify-between border-r border-white/10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
              <p className="text-slate-400 mb-10">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                    <a href="mailto:cesargcm@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      cesargcm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Phone</p>
                    <a href="tel:+14805674580" className="text-white hover:text-blue-400 transition-colors">
                      (480) 567-4580
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Location</p>
                    <p className="text-white">Chandler, Arizona</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/césar-castro-5aa74189"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 p-10 bg-slate-900/20">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center px-4 py-12"
              >
                <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-8 max-w-sm">
                  Thanks for reaching out. I've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 border border-white/20 rounded-xl text-slate-300 font-medium hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none placeholder-slate-600"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none placeholder-slate-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none placeholder-slate-600"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none placeholder-slate-600"
                    placeholder="Briefly describe what you are looking for..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
