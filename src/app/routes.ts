import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TraditionalAuthorityPage } from './pages/TraditionalAuthorityPage';
import { TourismPage } from './pages/TourismPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { EducationPage } from './pages/EducationPage';
import { HealthPage } from './pages/HealthPage';
import { ProminentMembersPage } from './pages/ProminentMembersPage';
import { BusinessPage } from './pages/BusinessPage';
import { CommunityPage } from './pages/CommunityPage';
import { DiasporaPage } from './pages/DiasporaPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'traditional-authority', Component: TraditionalAuthorityPage },
      { path: 'news-events', Component: NewsEventsPage },
      { path: 'tourism', Component: TourismPage },
      { path: 'education', Component: EducationPage },
      { path: 'health', Component: HealthPage },
      { path: 'prominent-members', Component: ProminentMembersPage },
      { path: 'business', Component: BusinessPage },
      { path: 'community', Component: CommunityPage },
      { path: 'diaspora', Component: DiasporaPage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
