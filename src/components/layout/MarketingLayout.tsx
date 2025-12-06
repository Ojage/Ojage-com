import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

