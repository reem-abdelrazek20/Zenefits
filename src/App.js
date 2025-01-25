import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import Header from "./header";
import Home from "./home";
import About from "./abou";
import Coffee from "./coffe";
import Rev from "./revw";
export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Home />
        <div className="overlay"></div>{" "}
      </div>

      <About />
      <Coffee />
      <Rev />
    </>
  );
}
