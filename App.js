import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import ServicesPage from './ServicesPage';
import ChannelsPage from './ChannelsPage';
import WeddingsPage from './WeddingsPage';
import CalendarPage from './CalendarPage';
import CoachingPage from './CoachingPage';
import ProviderNetworkPage from './ProviderNetworkPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/channels" element={<ChannelsPage />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/provider-network" element={<ProviderNetworkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
