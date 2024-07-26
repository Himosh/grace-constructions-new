import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/LandingPage/landingPage'
import Career from './pages/CareerPage/careerPage'
import Contact from './pages/ContactPage/contactPage'
import NavBar from "./components/NavBar/NavBar";
import CompletedProjects from './pages/CompletedProjectPage/completedProjectPage'
import OngoingProjects from './pages/OngoingProjectPage/ongoingProjectPage'
import AboutPage from './pages/AboutPage/About'
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import StaffPage from './pages/StaffPage/staffPage';



function App() {
    return (
        <Router>
            <Helmet>
      <title>Grace construction</title>
      <meta name="description" content="Building Dreams,Creating Realities" />
      <meta property="og:title" content="Default Title" />
      <meta property="og:description" content="Building Dreams,Creating Realities" />
      <meta property="og:image" content="https://www.graceconstruction.lk/" />
      <meta property="og:url" content="https://www.graceconstruction.lk/" />
    </Helmet>

            <div>
                
            <NavBar />

                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />

                    <Route
                        path='/about'
                        element={<AboutPage />}
                    />

                    <Route
                        path='/career'
                        element={<Career />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact />}
                    />

                    <Route
                        path='/completed-projects'
                        element={<CompletedProjects />}

                    />

                    <Route
                        path='/ongoing-projects'
                        element={<OngoingProjects />}
                    />

                    <Route
                        path='/staff'
                        element={<StaffPage/>}
                    />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
