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



function App() {
    return (
        <Router>
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


                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
