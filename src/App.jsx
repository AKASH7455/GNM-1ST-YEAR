import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/BottomNav";

import { QuizProvider } from "./context/QuizContext";

import "./styles/main.css";
import "./styles/subjects.css";

function App() {
  return (
    <QuizProvider>
      <div className="app">
        <AppRoutes />
        <BottomNav />
      </div>
    </QuizProvider>
  );
}

export default App;
