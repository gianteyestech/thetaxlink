import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { ContentProvider } from '@/content/ContentContext';
import AdminApp from '@/admin/AdminApp';
import Layout from '@/components/layout/Layout';
import PageNotFound from '@/lib/PageNotFound';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import BusinessAdvice from '@/pages/services/BusinessAdvice';
import AccountsPreparation from '@/pages/services/AccountsPreparation';
import Taxation from '@/pages/services/Taxation';
import Bookkeeping from '@/pages/services/Bookkeeping';
import Payroll from '@/pages/services/Payroll';
import CorporateSecretarial from '@/pages/services/CorporateSecretarial';
import TrademarkRegistration from '@/pages/services/TrademarkRegistration';
import Technology from '@/pages/services/Technology';
import Marketing from '@/pages/services/Marketing';
import Outsourcing from '@/pages/services/Outsourcing';

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <ContentProvider>
      <Router basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about-us" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="our-services" element={<Services />} />
            <Route path="business-advice" element={<BusinessAdvice />} />
            <Route path="accounts-preparation" element={<AccountsPreparation />} />
            <Route path="taxation" element={<Taxation />} />
            <Route path="bookkeeping" element={<Bookkeeping />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="corporate-secretarial" element={<CorporateSecretarial />} />
            <Route path="trademark-registration" element={<TrademarkRegistration />} />
            <Route path="technology" element={<Technology />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="outsourcing" element={<Outsourcing />} />
            <Route path="services/business-advice" element={<BusinessAdvice />} />
            <Route path="services/accounts-preparation" element={<AccountsPreparation />} />
            <Route path="services/taxation" element={<Taxation />} />
            <Route path="services/bookkeeping" element={<Bookkeeping />} />
            <Route path="services/payroll" element={<Payroll />} />
            <Route path="services/corporate-secretarial" element={<CorporateSecretarial />} />
            <Route path="services/trademark-registration" element={<TrademarkRegistration />} />
            <Route path="services/technology" element={<Technology />} />
            <Route path="services/marketing" element={<Marketing />} />
            <Route path="services/outsourcing" element={<Outsourcing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <SonnerToaster />
      </ContentProvider>
    </QueryClientProvider>
  );
}
