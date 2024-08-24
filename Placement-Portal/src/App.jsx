import './index.css';
import './App.css';
import Navbar from './Components/NavBar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import JobListings from './Components/jobListings';
import PortalWelcome from './Components/Portalwelcome';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="sidebar w-1/4 bg-blue-800 p-4">
          <Sidebar />
        </div>
        <div className="content w-3/4 flex flex-col p-4 overflow-auto">
          <div className="portal-welcome flex-1 bg-gray-100 shadow-lg rounded-lg p-6 mb-6">
            <PortalWelcome />
          </div>
          <div className="job-listings mb-6">
            <JobListings />
          </div>
          <div className="dashboard flex-1 bg-white shadow-lg rounded-lg p-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
