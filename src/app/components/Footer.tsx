import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT, mailtoLink, whatsappLink } from '../lib/contact';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#3a6b35] rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-[#d4a574] rounded-sm"></div>
              </div>
              <h3 className="font-semibold">Mpraeso Community</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Official website of Mpraeso Community, Kwahu South Municipal District, Eastern Region of Ghana.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#3a6b35] to-[#d4a574]"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-[#d4a574] transition-colors">About</Link></li>
              <li><Link to="/traditional-authority" className="text-gray-400 hover:text-[#d4a574] transition-colors">Traditional Authority</Link></li>
              <li><Link to="/news-events" className="text-gray-400 hover:text-[#d4a574] transition-colors">News & Events</Link></li>
              <li><Link to="/tourism" className="text-gray-400 hover:text-[#d4a574] transition-colors">Tourism & Investment</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-[#d4a574] transition-colors">Education</Link></li>
              <li><Link to="/health" className="text-gray-400 hover:text-[#d4a574] transition-colors">Health</Link></li>
              <li><Link to="/prominent-members" className="text-gray-400 hover:text-[#d4a574] transition-colors">Prominent Members</Link></li>
              <li><Link to="/business" className="text-gray-400 hover:text-[#d4a574] transition-colors">Business</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-[#d4a574] transition-colors">Community Projects</Link></li>
              <li><Link to="/diaspora" className="text-gray-400 hover:text-[#d4a574] transition-colors">Diaspora Corner</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-[#d4a574] transition-colors">Gallery</Link></li>
              <li><Link to="/help-hotlines" className="text-gray-400 hover:text-[#d4a574] transition-colors">Help &amp; Hotlines</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#d4a574]" />
                <span>Mpraeso, Kwahu South Municipal District<br />Eastern Region, Ghana</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0 text-[#d4a574]" />
                <span>{CONTACT.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0 text-[#d4a574]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#d4a574] transition-colors">{CONTACT.email}</a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={whatsappLink('Hello, I would like to join the Mpraeso Diaspora Network.')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d4a574] transition-colors">
                  Join the Diaspora Network
                </a>
              </li>
              <li><Link to="/community" className="text-gray-400 hover:text-[#d4a574] transition-colors">Support a Project</Link></li>
              <li>
                <a href={mailtoLink('Business listing request')} className="text-gray-400 hover:text-[#d4a574] transition-colors">
                  List Your Business
                </a>
              </li>
              <li><Link to="/investment-opportunities" className="text-gray-400 hover:text-[#d4a574] transition-colors">Invest in Mpraeso</Link></li>
              <li>
                <a href={mailtoLink('Sharing a story or photograph of Mpraeso')} className="text-gray-400 hover:text-[#d4a574] transition-colors">
                  Share a Story or Old Photograph
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rotate-45"
                style={{
                  backgroundColor: i % 3 === 0 ? '#3a6b35' : i % 3 === 1 ? '#d4a574' : '#8b6f47'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Mpraeso Community. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}