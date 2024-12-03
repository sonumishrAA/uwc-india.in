import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Signup from "./components/Signup";
import TermsAndConditions from "./components/TermsAndConditions";
import ClientDemandForm from "./components/ClientDemandForm";
import PrivacyPolicy from "./components/Privacy&Policy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Section from "./components/Section";
import PriceCalculation from "./components/PriceCalculation";
import Services from "./components/Services";
import Workers from "./components/Workers";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PaymentPage from "./components/Payment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Navbar />
                <Hero></Hero>
                <Cards></Cards>
                <Section></Section>
                <Footer></Footer>
              </>
            }
          />
          <Route path="/price-calculation" element={<PriceCalculation />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/home"
            element={
              <>
                <Header></Header>
                <Navbar />
                <Hero></Hero>
                <Cards></Cards>
                <Section></Section>
                <Footer></Footer>
              </>
            }
          />

          <Route
            path="/aboutus"
            element={
              <>
                <Header></Header>
                <Navbar />
                <AboutUs />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/contus"
            element={
              <>
                <Header></Header>
                <Navbar />
                <ContactUs />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/workers"
            element={
              <>
                <Header></Header>
                <Navbar />
                <Workers></Workers>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Header></Header>
                <Navbar />
                <Services></Services>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/p&p"
            element={
              <>
                <Header></Header>
                <Navbar />
                <PrivacyPolicy></PrivacyPolicy>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/FAQ"
            element={
              <>
                <Header></Header>
                <Navbar />
                <FAQ></FAQ>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/tt"
            element={
              <>
                <Header></Header>
                <Navbar />
                <TermsAndConditions></TermsAndConditions>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header></Header>
                <Navbar />
                <Signup></Signup>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/cdf"
            element={
              <>
                <Header></Header>
                <Navbar />
                <ClientDemandForm></ClientDemandForm>
                <Footer></Footer>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
