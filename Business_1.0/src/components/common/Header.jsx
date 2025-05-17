// components/common/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import placeholder for now - would be replaced with actual assets from assets folder
const octopusLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2E3OGJmYSIgZD0iTTEyIDJDOS41IDIgNy41IDMgNi41IDVDNS45IDUgNS4zIDUuMyA0LjggNS42QzMuNyA2LjMgMyA3LjYgMyA5QzMgMTAuNCBDMy43IDExLjcgNC44IDEyLjUgNiAxMi45QzYgMTMuMyA2IDEzLjYgNiAxNEM2IDE1LjkgNS42IDE2LjcgNC44IDE3LjNDNC42IDE3LjQgNC4zIDE3LjUgNCAxNy41QzMuNyAxOCA0IDE4LjUgNSAxOC41QzUuMyAxOC41IDYgMTguNCA2LjQgMTguMkM3LjUgMTcuNyA4IDE2LjQgOCAxNC42VjEyLjZDOSAxMi45IDEwIDE3LjQgMTEgMTcuOUMxMS4zIDE4IDEyIDE4LjUgMTIgMTguNUMxMiAxOC41IDEyLjcgMTggMTMgMTcuOUMxNCAxNy40IDE1IDEyLjYgMTYgMTIuNlYxNC42QzE2IDE2LjQgMTYuNSAxNy44IDE3LjYgMTguMkMxOCAxOC40IDE4LjcgMTguNSAxOSAxOC41QzIwIDE4LjUgMjAuMyAxOCAxOSAxNy41QzE4LjcgMTcuNSAxOC40IDE3LjQgMTguMiAxNy4zQzE3LjQgMTYuNyAxNyAxNS45IDE3IDE0QzE3IDEzLjYgMTcgMTMuMyAxNyAxMi45QzE4LjIgMTIuNSAxOS4zIDExLjcgMjAgMTAuNFYxMFYwVjlDMjAgNy42IDE5LjMgNi4zIDE4LjIgNS42QzE3LjcgNS4zIDE3LjEgNSAxNi41IDVDMTU2IDMgMTMuNSAyIDEyIDJaTTUgN0M1LjYgNyA2IDcuNCA2IDhDNiA4LjYgNS42IDkgNSA5QzQuNCA5IDQgOC42IDQgOEM0IDcuNCA0LjQgNyA1IDdaTTE5IDdDMTkuNiA3IDIwIDcuNCAyMCA4QzIwIDguNiAxOS42IDkgMTkgOUMxOC40IDkgMTggOC42IDE4IDhDMTggNy40IDE4LjQgNyAxOSA3WiI+PC9wYXRoPjwvc3ZnPg==";

function Header({ isScrolled }) {
  const logoVariants = {
    expanded: { width: "16ch" },
    collapsed: { width: "6ch" }
  };

  const fullNameVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  };

  const shortNameVariants = {
    expanded: { opacity: 0, x: 20 },
    collapsed: { opacity: 1, x: 0 }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={octopusLogo} alt="Octopus AI Logo" className="h-12 w-12" />
          <motion.div
            className="relative font-bold text-xl text-purple-400 overflow-hidden"
            variants={logoVariants}
            initial="expanded"
            animate={isScrolled ? "collapsed" : "expanded"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.span
              className="inline-block absolute left-0"
              variants={fullNameVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              OCTOPUS AI
            </motion.span>
            <motion.span
              className="inline-block"
              variants={shortNameVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              OAI
            </motion.span>
          </motion.div>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Features', path: '/features' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link 
                  to={item.path} 
                  className="text-gray-300 hover:text-purple-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;