import React from 'react';
import './style/App.scss?t=1';

// Components
import DesktopNav from './components/navbar/desktop-nav';
import MobileNav from './components/navbar/mobile-nav';
import Backdrop from "./components/navbar/backdrop";
import Hero from './components/hero/hero';
import Portfolio from "./components/portfolio/portfolio";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import Histories from './components/histories/histories';
 
class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  // Detect if user is scorlled down (used for add/disable extra large navbar)
  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };
  // On closeMobileMenu click close navbar
  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };
  // Mobile menu handler
  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    // BACKDROP RENDER
    let backdrop = <Backdrop closeMobileMenu={this.closeMobileMenu} />;
    if (this.state.mobileNavbarOpen) {
      backdrop = (
        <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
      );
    }
    // MOBILE NAVBAR RENDER
    let mobileNavbar = <MobileNav />;
    if (this.state.mobileNavbarOpen) {
      mobileNavbar = (
        <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
      );
    }

    return (
      <BrowserRouter>
      <div className="App">
        {mobileNavbar}
        {backdrop}
        <DesktopNav
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <About />
              <Contact />
            </>
          } />
          <Route path="/history" element={<Histories />} />
          <Route path="*" element={<RedirectToHome />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

function RedirectToHome() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
}

export default App;
