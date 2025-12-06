import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { ROUTES } from '../../lib/constants/routes';
import { SITE_CONFIG } from '../../lib/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Languages', href: ROUTES.LANGUAGES },
      { label: 'Demo', href: ROUTES.DEMO },
      { label: 'Research', href: ROUTES.RESEARCH },
    ],
    Community: [
      { label: 'Contribute', href: ROUTES.CONTRIBUTE },
      { label: 'Members', href: ROUTES.COMMUNITY_MEMBERS },
      { label: 'Events', href: ROUTES.COMMUNITY_EVENTS },
      { label: 'Blog', href: ROUTES.BLOG },
    ],
    Resources: [
      { label: 'Datasets', href: ROUTES.RESEARCH_DATASETS },
      { label: 'Papers', href: ROUTES.RESEARCH_PAPERS },
      { label: 'Benchmarks', href: ROUTES.RESEARCH_BENCHMARKS },
    ],
    Company: [
      { label: 'About', href: ROUTES.ABOUT },
      { label: 'Contact', href: ROUTES.CONTACT },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">© {currentYear} {SITE_CONFIG.fullName}</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm">Open Source Initiative</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-white transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link to="#" className="hover:text-gray-300">
              Terms of Use
            </Link>
            <Link to="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-gray-300">
              Code of Conduct
            </Link>
            <Link to="#" className="hover:text-gray-300">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

