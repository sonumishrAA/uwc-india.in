import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { supabase } from "./supabase"; // Make sure you have this setup
// ... other imports remain same ...
import "./App.css";
import PaymentStatus from "./components/PaymentStatus";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Section from "./components/Section";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/Privacy&Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import Auth from "../src/components/Auth";
import WorkersLogin from "./components/Wrklogin";

import LogoLoader from "./components/LogoLoader";
import HireWorker from "./components/Hirepage";
import HireService from "./components/HireServices";
import { HireWorkerLC } from "./HireMasonNworker";
import ElectricalServices from "./components/ElectricalServices";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
HireWorkerLC;
import ElectricalAppliencesServices from "./components/ElectricalAppliencesServices";
import CarpenterServices from "./components/CarpenterServices";
import CleaningServices from "./components/CleaningServices";
import PaintingServices from "./components/PaintingServices";
import PlumbingServices from "./components/PlumbingServices";
import DrivingServices from "./components/DrivingServices";
const workers = [
  { path: "MA", type: "Masonry" },
  { path: "LA", type: "Labour" },
  { path: "EL", type: "Electrician" },
  { path: "PL", type: "Plumber" },
  { path: "PA", type: "Painter" },
  { path: "ML", type: "Mason and Labour" },
  { path: "LC", type: "Labour for Construction" },
];

const services = [
  { path: "FC", type: "Full Construction" },
  { path: "LB", type: "Labour for Booking" },
  { path: "TS", type: "Tiles and Stone Setup" },
  { path: "HP", type: "House Painting" },
  { path: "HW", type: "House Wiring" },
  { path: "TT", type: "Tank and Top Setup" },
  { path: "OC", type: "Other Contract Services" },
];

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  if (loading) return <LogoLoader />;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LogoLoader />;
  // ... existing App component code remains same ...

  return (
    <Router>
      <Routes>
        <Route
          path="/workers"
          element={
            <>
              <Header />
              <Navbar />
              <Section />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Hero />
              <Cards />
              <Section />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <Navbar />
              <Auth />
              <Footer />
            </>
          }
        />
        <Route
          path="/FAQ"
          element={
            <>
              <Header />
              <Navbar />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Navbar />
              <Auth />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <Header />
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        {/* Add other public routes here */}
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Navbar />
              <Cards />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <Header />
              <Navbar />
              <TermsAndConditions />
              <Footer />
            </>
          }
        />
        <Route
          path="/p&p"
          element={
            <>
              <Header />
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <Header />
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />
        {/* Protected Routes */}
        {/* <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } /> */}

        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <WorkersLogin />
                <Navbar />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        {workers.map(({ path, type }) => (
          <Route
            key={path}
            path={`/HireWorker${path}`}
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Navbar />
                  <HireWorker workerType={type} />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        ))}

        {services.map(({ path, type }) => (
          <Route
            key={path}
            path={`/HireService${path}`}
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Navbar />
                  <HireService serviceType={type} />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        ))}
        <Route path="/status/:status" element={<PaymentStatus />} />
        {/* Protect other service routes similarly */}
        <Route
          path="/ElectricalServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <ElectricalServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ElectricalAppliencesServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <ElectricalAppliencesServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/CarpenterServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <CarpenterServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/CleaningServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <CleaningServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/PaintingServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <PaintingServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/PlumbingServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <PlumbingServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/DrivingServices"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <DrivingServices />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <>
                <Header />
                <Navbar />
                <Cards />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        {workers.map(({ path, type }) => (
          <Route
            key={path}
            path={`/HireWorker${path}`}
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Navbar />
                  <HireWorker workerType={type} />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        ))}
        {services.map(({ path, type }) => (
          <Route
            key={path}
            path={`/HireService${path}`}
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Navbar />
                  <HireService serviceType={type} />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        ))}

        {/* ... repeat for other service routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
