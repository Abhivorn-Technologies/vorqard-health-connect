import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import HomePage from './routes/HomePage'
import AboutPage from './routes/AboutPage'
import FeaturesPage from './routes/FeaturesPage'
import PricingPage from './routes/PricingPage'
import DoctorsPage from './routes/DoctorsPage'
import HospitalsPage from './routes/HospitalsPage'
import ContactPage from './routes/ContactPage'
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
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
