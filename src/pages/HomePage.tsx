import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGlobe, FiCode, FiUsers, FiBook } from 'react-icons/fi';
import { ROUTES } from '../lib/constants/routes';
import { SITE_CONFIG, STATS } from '../lib/constants/config';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import MissionStatement from '../components/home/MissionStatement';
import ProjectsGrid from '../components/home/ProjectsGrid';
import CTASection from '../components/home/CTASection';
import SEO from '../components/seo/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title={SITE_CONFIG.tagline}
        description={`${SITE_CONFIG.description}. Explore our datasets, translation demos, research papers, and join our community of contributors working to preserve Cameroon's linguistic diversity.`}
        keywords="Cameroon languages, NLP resources, open source datasets, machine translation, text-to-speech, linguistic diversity"
      />
      <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <MissionStatement />
        <ProjectsGrid />
        <CTASection />
      </div>
    </>
  );
}
