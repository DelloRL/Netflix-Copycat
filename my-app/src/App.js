import "./App.css";

import Navigation from "./components/navigation";
import Billboard from "./components/billboard";
import Titles from "./components/titles";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
