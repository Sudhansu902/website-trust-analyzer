import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnalyzerForm from "./components/AnalyzerForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ResultCard from "./components/ResultCard";
import SignalGrid from "./components/SignalGrid";
import { checkWebsite } from "./utils/api";

const App = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!url.trim()) {
      setError("Please enter a website URL.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await checkWebsite(url);
      setResult(data);
    } catch (requestError) {
      const message =
        requestError.response?.data?.message ||
        "The analysis request failed. Check the backend URL and try again.";
      setError(message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="top" className="relative overflow-hidden">
      <Navbar />
      <Hero />

      <main className="px-6 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <AnalyzerForm
            url={url}
            setUrl={setUrl}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />

          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={result.status + result.score}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <ResultCard result={result} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </main>

      <SignalGrid />
      <Footer />
    </div>
  );
};

export default App;
