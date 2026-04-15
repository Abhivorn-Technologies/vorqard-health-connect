import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import HomePage from './routes/HomePage'
import AboutPage from './routes/AboutPage'
import FeaturesPage from './routes/FeaturesPage'
import PricingPage from './routes/PricingPage'
import DoctorsPage from './routes/DoctorsPage'
import HospitalsPage from './routes/HospitalsPage'
import ContactPage from './routes/ContactPage'
import BlogPage from './routes/BlogPage'
import PrivacyPage from './routes/PrivacyPage'
import SecurityPage from './routes/SecurityPage'
import TermsPage from './routes/TermsPage'
import FAQPage from './routes/FAQPage'
import ChangelogPage from './routes/ChangelogPage'
import DataProtectionPage from './routes/DataProtectionPage'
import NotFoundPage from './routes/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="hospitals" element={<HospitalsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="changelog" element={<ChangelogPage />} />
        <Route path="data-protection" element={<DataProtectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
