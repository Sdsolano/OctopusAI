// components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import placeholder for now - would be replaced with actual assets from assets folder
const octopusLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2E3OGJmYSIgZD0iTTEyIDJDOS41IDIgNy41IDMgNi41IDVDNS45IDUgNS4zIDUuMyA0LjggNS42QzMuNyA2LjMgMyA3LjYgMyA5QzMgMTAuNCBDMy43IDExLjcgNC44IDEyLjUgNiAxMi45QzYgMTMuMyA2IDEzLjYgNiAxNEM2IDE1LjkgNS42IDE2LjcgNC44IDE3LjNDNC42IDE3LjQgNC4zIDE3LjUgNCAxNy41QzMuNyAxOCA0IDE4LjUgNSAxOC41QzUuMyAxOC41IDYgMTguNCA2LjQgMTguMkM3LjUgMTcuNyA4IDE2LjQgOCAxNC42VjEyLjZDOSAxMi45IDEwIDE3LjQgMTEgMTcuOUMxMS4zIDE4IDEyIDE4LjUgMTIgMTguNUMxMiAxOC41IDEyLjcgMTggMTMgMTcuOUMxNCAxNy40IDE1IDEyLjYgMTYgMTIuNlYxNC42QzE2IDE2LjQgMTYuNSAxNy44IDE3LjYgMTguMkMxOCAxOC40IDE4LjcgMTguNSAxOSAxOC41QzIwIDE4LjUgMjAuMyAxOCAxOSAxNy41QzE4LjcgMTcuNSAxOC40IDE3LjQgMTguMiAxNy4zQzE3LjQgMTYuNyAxNyAxNS45IDE3IDE0QzE3IDEzLjYgMTcgMTMuMyAxNyAxMi45QzE4LjIgMTIuNSAxOS4zIDExLjcgMjAgMTAuNFYxMFYwVjlDMjAgNy42IDE5LjMgNi4zIDE4LjIgNS42QzE3LjcgNS4zIDE3LjEgNSAxNi41IDVDMTU2IDMgMTMuNSAyIDEyIDJaTTUgN0M1LjYgNyA2IDcuNCA2IDhDNiA4LjYgNS42IDkgNSA5QzQuNCA5IDQgOC42IDQgOEM0IDcuNCA0LjQgNyA1IDdaTTE5IDdDMTkuNiA3IDIwIDcuNCAyMCA4QzIwIDguNiAxOS42IDkgMTkgOUMxOC40IDkgMTggOC42IDE4IDhDMTggNy40IDE4LjQgNyAxOSA3WiI+PC9wYXRoPjwvc3ZnPg==";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Octopus AI</h3>
            <p className="text-gray-400">Transformando la comunicación empresarial con IA</p>
            <div className="mt-4 flex items-center">
              <img src={octopusLogo} alt="Octopus Logo" className="h-8 w-8 mr-2" />
              <span className="text-purple-400 font-semibold">OCTOPUS AI</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/services#whatsapp" className="hover:text-purple-400">WhatsApp AI</Link></li>
              <li><Link to="/services#telegram" className="hover:text-purple-400">Telegram AI</Link></li>
              <li><Link to="/services#gmail" className="hover:text-purple-400">Gmail Automation</Link></li>
              <li><Link to="/services#excel" className="hover:text-purple-400">Excel Integration</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>Email: info@octopusai.com</li>
              <li>WhatsApp: +1 234 567 890</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map(platform => (
                <a key={platform} href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Octopus AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;