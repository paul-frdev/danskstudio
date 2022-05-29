import React from 'react';
import { MainRoutes } from './routes/MainRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';
import ErrorBoundary from './shared/ErrorBoundary';

function App() {
  return (
    <>
      <Router>
        <ErrorBoundary>
          <ScrollToTop>
            <MainRoutes />
          </ScrollToTop>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
