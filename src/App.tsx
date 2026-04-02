import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfService } from "@/pages/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
