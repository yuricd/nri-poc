import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Quiz } from "./components/Quiz/Quiz";
import { Results } from "./components/Results/Results";

export const InterestsContext = createContext();

function App() {
  const [interests, setInterests] = useState([]);
  const [results, setResults] = useState([]);

  const provided = useMemo(
    () => ({
      interests,
      setInterests,
      results,
      setResults,
    }),
    [interests, results]
  );

  return (
    <InterestsContext.Provider value={provided}>
      <BrowserRouter>
        <Routes>
          <Route path="results" element={<Results />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </InterestsContext.Provider>
  );
}

export default App;
