import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './components/layout/MarketingLayout';
import { ROUTES } from './lib/constants/routes';

// Pages
import HomePage from './pages/HomePage';
import LanguagesPage from './pages/languages/LanguagesPage';
import LanguageDetailPage from './pages/languages/LanguageDetailPage';
import DemoPage from './pages/demo/DemoPage';
import ResearchPage from './pages/research/ResearchPage';
import PapersPage from './pages/research/PapersPage';
import PaperDetailPage from './pages/research/PaperDetailPage';
import DatasetsPage from './pages/research/DatasetsPage';
import BenchmarksPage from './pages/research/BenchmarksPage';
import ContributePage from './pages/contribute/ContributePage';
import RecordPage from './pages/contribute/RecordPage';
import TranslatePage from './pages/contribute/TranslatePage';
import ValidatePage from './pages/contribute/ValidatePage';
import CommunityPage from './pages/community/CommunityPage';
import MembersPage from './pages/community/MembersPage';
import EventsPage from './pages/community/EventsPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import BlogCategoryPage from './pages/blog/BlogCategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MarketingLayout><HomePage /></MarketingLayout>} />
        <Route path={ROUTES.LANGUAGES} element={<MarketingLayout><LanguagesPage /></MarketingLayout>} />
        <Route path="/languages/:slug" element={<MarketingLayout><LanguageDetailPage /></MarketingLayout>} />
        <Route path={ROUTES.DEMO} element={<MarketingLayout><DemoPage /></MarketingLayout>} />
        <Route path={ROUTES.RESEARCH} element={<MarketingLayout><ResearchPage /></MarketingLayout>} />
        <Route path={ROUTES.RESEARCH_PAPERS} element={<MarketingLayout><PapersPage /></MarketingLayout>} />
        <Route path="/research/papers/:slug" element={<MarketingLayout><PaperDetailPage /></MarketingLayout>} />
        <Route path={ROUTES.RESEARCH_DATASETS} element={<MarketingLayout><DatasetsPage /></MarketingLayout>} />
        <Route path={ROUTES.RESEARCH_BENCHMARKS} element={<MarketingLayout><BenchmarksPage /></MarketingLayout>} />
        <Route path={ROUTES.CONTRIBUTE} element={<MarketingLayout><ContributePage /></MarketingLayout>} />
        <Route path={ROUTES.CONTRIBUTE_RECORD} element={<MarketingLayout><RecordPage /></MarketingLayout>} />
        <Route path={ROUTES.CONTRIBUTE_TRANSLATE} element={<MarketingLayout><TranslatePage /></MarketingLayout>} />
        <Route path={ROUTES.CONTRIBUTE_VALIDATE} element={<MarketingLayout><ValidatePage /></MarketingLayout>} />
        <Route path={ROUTES.COMMUNITY} element={<MarketingLayout><CommunityPage /></MarketingLayout>} />
        <Route path={ROUTES.COMMUNITY_MEMBERS} element={<MarketingLayout><MembersPage /></MarketingLayout>} />
        <Route path={ROUTES.COMMUNITY_EVENTS} element={<MarketingLayout><EventsPage /></MarketingLayout>} />
        <Route path={ROUTES.BLOG} element={<MarketingLayout><BlogPage /></MarketingLayout>} />
        <Route path="/blog/:slug" element={<MarketingLayout><BlogPostPage /></MarketingLayout>} />
        <Route path="/blog/category/:slug" element={<MarketingLayout><BlogCategoryPage /></MarketingLayout>} />
        <Route path={ROUTES.ABOUT} element={<MarketingLayout><AboutPage /></MarketingLayout>} />
        <Route path={ROUTES.CONTACT} element={<MarketingLayout><ContactPage /></MarketingLayout>} />
        <Route path="*" element={<MarketingLayout><NotFoundPage /></MarketingLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
