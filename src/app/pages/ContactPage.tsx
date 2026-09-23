import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { CONTACT, mailtoLink, whatsappLink } from '../lib/contact';

export function ContactPage() {
  // There is no backend yet, so the form hands the message to the visitor's email app.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get('firstName') ?? ''} ${data.get('lastName') ?? ''}`.trim();
    const body = `${data.get('message') ?? ''}\n\n— ${name}\n${data.get('email') ?? ''}`;
    window.location.href = mailtoLink(String(data.get('subject') || 'Message from the website'), body);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-[#3a6b35] to-[#2d5016]">
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Get in touch with the Mpraeso community
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear from you. Whether you're a resident, visitor, or member of our diaspora, feel free to reach out with questions, suggestions, or collaboration opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3a6b35] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Municipal Assembly Office<br />
                      Mpraeso, Kwahu South<br />
                      Eastern Region, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3a6b35] rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3a6b35] rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${CONTACT.email}`} className="hover:text-[#3a6b35]">
                        {CONTACT.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 mb-4">Prefer WhatsApp?</h3>
                <a
                  href={whatsappLink('Hello, I am reaching out from the Mpraeso Community website.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#3a6b35] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2d5016]"
                >
                  <MessageCircle size={20} />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#faf8f5] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b35] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b35] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                      name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b35] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                      name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b35] focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3a6b35] focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3a6b35] hover:bg-[#2d5016] text-white px-8 py-4 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-[#d4a574] font-semibold mb-2">Monday - Friday</div>
                <div className="text-white/90">8:00 AM - 5:00 PM</div>
              </div>
              <div>
                <div className="text-[#d4a574] font-semibold mb-2">Saturday</div>
                <div className="text-white/90">9:00 AM - 1:00 PM</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4">Closed on Sundays and Public Holidays</p>
          </div>
        </div>
      </section>
    </div>
  );
}
