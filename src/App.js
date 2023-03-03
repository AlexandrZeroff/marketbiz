import './App.css';
import Marketbiz from './Marketbiz';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logistic from './pages/Logistic';
import ServiceList from './components/ServiceList';
import Saas from './pages/Saas';
import Outsorcing from './pages/Outsorcing';
import BConsultation from './pages/BConsultation';
import MActivities from './pages/MActivities';
import MConsultation from './pages/MConsultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketbiz />}>
          <Route index element={<ServiceList />} />
          <Route path="logistic" element={<Logistic />} />
          <Route path="saas-development" element={<Saas />} />
          <Route path="it-outsorcing" element={<Outsorcing />} />
          <Route path="business-consultation" element={<BConsultation />} />
          <Route path="marketing-activities" element={<MActivities />} />
          <Route path="marketing-consultation" element={<MConsultation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
