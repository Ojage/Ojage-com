import React, { useState } from 'react';
import {
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  ShoppingCart,
  Search,
  Menu,
  X,
} from 'lucide-react';

/* 
  SRP: SocialIcon is responsible only for rendering a single social icon.
  ISP: The SocialIconProps interface exposes only the necessary properties.
*/
interface SocialIconProps {
  href: string;
  ariaLabel: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, ariaLabel, Icon, color }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      <Icon className={`w-5 h-5 ${color}`} />
    </a>
  </li>
);

/* 
  OCP: SocialIcons is open for extension (simply add more icons via configuration)
  SRP: It only deals with rendering the list of social icons.
*/
const SocialIcons: React.FC = () => {
  const icons: SocialIconProps[] = [
    {
      href: 'https://www.linkedin.com/company/international-cocoa-organization-icco',
      ariaLabel: 'LinkedIn',
      Icon: Linkedin,
      color: 'text-blue-600',
    },
    {
      href: 'https://twitter.com/intlcocoaorg',
      ariaLabel: 'X',
      Icon: Twitter,
      color: 'text-blue-400',
    },
    {
      href: 'https://www.youtube.com/channel/UCP9c5dQRwPFeURWoc0QSkFw/featured',
      ariaLabel: 'YouTube',
      Icon: Youtube,
      color: 'text-red-600',
    },
    {
      href: 'https://www.instagram.com/intlcocoaorg/',
      ariaLabel: 'Instagram',
      Icon: Instagram,
      color: 'text-pink-500',
    },
    {
      href: 'mailto:info@icco.org',
      ariaLabel: 'Mail',
      Icon: Mail,
      color: 'text-gray-600',
    },
  ];

  return (
    <ul className="flex space-x-4">
      {icons.map((icon, index) => (
        <SocialIcon key={index} {...icon} />
      ))}
    </ul>
  );
};

/* 
  SRP: TopNavigation is solely responsible for rendering the upper navigation links.
*/
const TopNavigation: React.FC = () => (
  <nav className="hidden md:block">
    <ul className="flex space-x-4 text-sm">
      <li>
        <a href="consultative-board/index.html" className="hover:text-blue-600">
          Consultative Board area
        </a>
      </li>
      <li>
        <a href="member-area/index.html" className="hover:text-blue-600">
          Member area
        </a>
      </li>
      <li>
        <a href="my-account/index.html" className="hover:text-blue-600">
          My account
        </a>
      </li>
      <li>
        <a href="contact/index.html" className="hover:text-blue-600">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

/* 
  ISP & DIP: Navigation items are defined via an interface, and Navigation only depends on that abstraction.
*/
interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: 'index.html' },
  {
    label: 'Who we are',
    href: 'who-we-are/index.html',
    subItems: [
      { label: 'Vision and Mandate', href: 'who-we-are/index.html#vision' },
      // Additional sub-items (e.g., Governance) can be added here
    ],
  },
  { label: 'Statistics', href: 'statistics/index.html' },
  {
    label: 'Economy',
    href: 'economy/index.html',
    subItems: [
      { label: 'Consultative Board on the World Cocoa Economy', href: 'economy/index.html#board' },
      { label: 'The World Cocoa Market', href: 'economy/index.html#market' },
      { label: 'Sustainability of the World Cocoa Economy', href: 'economy/index.html#sustainability' },
      { label: 'Cocoa Quality', href: 'economy/index.html#quality' },
    ],
  },
  { label: 'Projects', href: 'projects/index.html' },
  {
    label: 'About Cocoa',
    href: '#',
    subItems: [
      { label: 'Growing Cocoa', href: 'growing-cocoa/index.html' },
      { label: 'Harvesting & Post-harvest', href: 'harvesting-post-harvest-new/index.html' },
      { label: 'Processing Cocoa', href: 'processing-cocoa/index.html' },
      { label: 'Trading & Shipping', href: 'trading-shipping/index.html' },
      { label: 'Health & Nutrition', href: 'health/index.html' },
      { label: 'Chocolate Industry', href: 'chocolate-industry/index.html' },
      { label: 'Fine Flavor Cocoa', href: 'fine-or-flavor-cocoa/index.html' },
      { label: 'Pests & Diseases', href: 'pests-diseases/index.html' },
      { label: 'Cocoa Sustainability Initiatives', href: 'cocoa-sustainability-initiatives-landscape/index.html' },
      { label: 'FAQ', href: 'faq/index.html' },
    ],
  },
  { label: 'Shop', href: 'shop/index.html' },
  { label: 'News', href: 'news/index.html' },
];

interface NavigationProps {
  items: NavItem[];
}

/* 
  SRP: Navigation is solely responsible for rendering primary navigation items.
*/
const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex space-x-6">
        {items.map((item, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

interface NavigationItemProps {
  item: NavItem;
}

/* 
  SRP: NavigationItem handles one navigation item and its optional dropdown.
*/
const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    <li className="relative group">
      <a href={item.href} className="hover:text-blue-600">
        {item.label}
      </a>
      {item.subItems && item.subItems.length > 0 && (
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {item.subItems.map((subItem, index) => (
            <li key={index}>
              <a href={subItem.href} className="block px-4 py-2 hover:bg-gray-100">
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

/* 
  SRP: UtilityIcons renders search and mobile menu icons.
  DIP: It receives an abstraction (onMobileMenuToggle) for toggling the mobile menu.
*/
interface UtilityIconsProps {
  onMobileMenuToggle: () => void;
}

const UtilityIcons: React.FC<UtilityIconsProps> = ({ onMobileMenuToggle }) => (
  <div className="flex items-center space-x-4">
    <a href="index1919.html?s=" aria-label="Search" className="hidden md:block">
      <Search className="w-5 h-5 text-gray-600" />
    </a>
    <button onClick={onMobileMenuToggle} aria-label="Mobile Menu" className="lg:hidden">
      <Menu className="w-6 h-6 text-gray-600" />
    </button>
    <div>
      <a href="cart/index.html" className="relative">
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
          0
        </span>
      </a>
    </div>
  </div>
);

/* 
  SRP: MainHeader is responsible for rendering the central part of the header, including logo, navigation, and utility icons.
  DIP: It relies on abstracted components and receives onMobileMenuToggle to trigger mobile navigation.
*/
interface MainHeaderProps {
  onMobileMenuToggle: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onMobileMenuToggle }) => {
  return (
    <div id="header_main" className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="index.html" aria-label="Ojage Cocoa">
            <img
              src="wp-content/uploads/2016/05/logo-icco-300x225.png"
              alt="Ojage Cocoa"
              className="h-16 w-auto"
            />
          </a>
        </div>
        {/* Primary Navigation (Desktop) */}
        <Navigation items={navItems} />
        {/* Utility Icons */}
        <UtilityIcons onMobileMenuToggle={onMobileMenuToggle} />
      </div>
    </div>
  );
};

/* 
  SRP: MobileNavigation renders a mobile-friendly vertical navigation overlay.
  It handles both primary navigation items and their sub-items.
*/
interface MobileNavigationProps {
  items: NavItem[];
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ items, onClose }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={onClose} aria-label="Close Mobile Menu">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block text-lg font-medium text-blue-600"
                onClick={onClose}
              >
                {item.label}
              </a>
              {item.subItems && (
                <ul className="mt-2 ml-4 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="block text-base text-gray-700"
                        onClick={onClose}
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* 
  SRP: Header is the parent component that composes all header-related components.
  DIP: It manages mobile menu state and passes callbacks to abstracted components.
*/
const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      id="header"
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
      className="bg-white shadow sticky top-0 z-50"
    >
      {/* Top Header Meta */}
      <div id="header_meta" className="bg-gray-100">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <SocialIcons />
          <TopNavigation />
        </div>
      </div>
      {/* Main Header */}
      <MainHeader onMobileMenuToggle={toggleMobileMenu} />
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && <MobileNavigation items={navItems} onClose={toggleMobileMenu} />}
      <div className="header_bg" />
    </header>
  );
};

export default Header;
