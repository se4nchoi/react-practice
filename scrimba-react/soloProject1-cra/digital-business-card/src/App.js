import "./assets/css/App.css";

import Head from "./components/Head.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Head />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
