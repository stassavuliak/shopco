import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer/Footer";
// import Newsletter from "./components/layout/Newsletter/Newsletter";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";

import "./styles/globals.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <ScrollToTop />
        <main>
          <AppRouter />
        </main>
        {/* <Newsletter /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
