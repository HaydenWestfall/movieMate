import { useState } from "react";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
