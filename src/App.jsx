import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import News from "./Component/News";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <NavBar />

      <Outlet  />

      <Footer />
    </>
  );
}

export default App;
