import React from 'react';
import { MainRoutes } from './routes/MainRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <MainRoutes />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
