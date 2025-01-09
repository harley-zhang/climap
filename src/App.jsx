import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import LaunchApp from "./pages/LaunchApp";
import GettingStarted from "./pages/GettingStarted";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/app" element={<LaunchApp />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
